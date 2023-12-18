/**
 * Forklift API
 * Migration toolkit for virtualization (Forklift) API definitions.
 *
 * The version of the OpenAPI document: 2.4.0
 * Contact Email: kubev2v-dev@redhat.com
 * License: Apache-2.0
 *
 * NOTE: This file is auto generated by crdtotypes (https://github.com/yaacov/crdtoapi/).
 * https://github.com/yaacov/crdtoapi/README.crdtotypes
 */

import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { V1beta1StorageMapSpec } from './V1beta1StorageMapSpec';
import { V1beta1StorageMapStatus } from './V1beta1StorageMapStatus';

export interface V1beta1StorageMap {
  /** apiVersion
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   *
   * @required {true}
   */
  apiVersion: string;
  /** kind
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   *
   * @required {true}
   */
  kind: string;
  /** metadata
   *
   * @required {false}
   * @originalType {V1beta1StorageMapMetadata}
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /** spec
   * Storage map spec.
   *
   * @required {false}
   */
  spec?: V1beta1StorageMapSpec;
  /** status
   * MapStatus defines the observed state of Maps.
   *
   * @required {false}
   */
  status?: V1beta1StorageMapStatus;
}
