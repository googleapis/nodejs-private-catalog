// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(resource) {
  // [START cloudprivatecatalog_v1beta1_generated_PrivateCatalog_SearchCatalogs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the resource context. It can be in following formats:
   *  * `projects/{project}`
   *  * `folders/{folder}`
   *  * `organizations/{organization}`
   */
  // const resource = 'abc123'
  /**
   *  The query to filter the catalogs. The supported queries are:
   *  * Get a single catalog: `name=catalogs/{catalog}`
   */
  // const query = 'abc123'
  /**
   *  The maximum number of entries that are requested.
   */
  // const pageSize = 1234
  /**
   *  A pagination token returned from a previous call to SearchCatalogs that
   *  indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'

  // Imports the Privatecatalog library
  const {PrivateCatalogClient} =
    require('@google-cloud/private-catalog').v1beta1;

  // Instantiates a client
  const privatecatalogClient = new PrivateCatalogClient();

  async function searchCatalogs() {
    // Construct request
    const request = {
      resource,
    };

    // Run request
    const iterable = await privatecatalogClient.searchCatalogsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  searchCatalogs();
  // [END cloudprivatecatalog_v1beta1_generated_PrivateCatalog_SearchCatalogs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
