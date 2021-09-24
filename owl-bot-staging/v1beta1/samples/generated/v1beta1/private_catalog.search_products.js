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
  // [START privatecatalog_v1beta1_generated_PrivateCatalog_SearchProducts_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the resource context. See [SearchCatalogsRequest.resource][google.cloud.privatecatalog.v1beta1.SearchCatalogsRequest.resource]
   *  for details.
   */
  // const resource = 'abc123'
  /**
   *  The query to filter the products.
   *  The supported queries are:
   *  * List products of all catalogs: empty
   *  * List products under a catalog: `parent=catalogs/{catalog}`
   *  * Get a product by name:
   *  `name=catalogs/{catalog}/products/{product}`
   */
  // const query = 'abc123'
  /**
   *  The maximum number of entries that are requested.
   */
  // const pageSize = 1234
  /**
   *  A pagination token returned from a previous call to SearchProducts that
   *  indicates where this listing should continue from.
   */
  // const pageToken = 'abc123'

  // Imports the Privatecatalog library
  const {PrivateCatalogClient} = require('@google-cloud/private-catalog').v1beta1;

  // Instantiates a client
  const privatecatalogClient = new PrivateCatalogClient();

  async function searchProducts() {
    // Construct request
    const request = {
      resource,
    };

    // Run request
    const iterable = await privatecatalogClient.searchProductsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  searchProducts();
  // [END privatecatalog_v1beta1_generated_PrivateCatalog_SearchProducts_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
