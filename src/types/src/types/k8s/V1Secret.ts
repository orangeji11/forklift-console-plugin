import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../../models';

export interface V1Secret {
  apiVersion?: string;
  kind?: string;
  immutable?: boolean;
  data?: Record<string, string>;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  type?: string;
}
