terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.5.0"
    }
  }
}

provider "google" {
  credentials = file("./service_account_key.json")

  project = "url-shsh"
  region  = "europe-west3"
  zone    = "europe-west3-b"
}

resource "google_cloud_run_service" "default" {
  name     = "shsh-core-be"
  location = "europe-west3"
  project  = "url-shsh"

  template {
    spec {
      containers {
        image = "gcr.io/url-shsh/shsh-core-be"
      }
    }
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}
