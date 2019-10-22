import { PoCircularChartSeries } from '../po-chart-circular/po-chart-circular-series.interface';

/**
 * @usedBy PoChartComponent
 *
 * @description
 *
 * Interface que define o objeto da série `PoChartType.Gauge`.
 *
 * @docsExtends PoCircularChartSeries
 */
export interface PoChartGaugeSerie extends PoCircularChartSeries {

  /**
   * @optional
   *
   * @description
   *
   * Define o texto que será exibido na área interna do *chart*.
   */
  description?: string;

  /**
   * @optional
   *
   * @description
   *
   * Define o texto que será exibido ao passar o mouse por cima das séries do *chart*.
   */
  tooltip?: string;

}
