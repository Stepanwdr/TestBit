import React, {FC} from 'react'
import {TransActions} from "../../types/user";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {formatDate} from "../../utils/formatDate";
import styled from "styled-components";

interface TransActionsChartProps {
    data: TransActions[]
}

export const TransActionsChart: FC<TransActionsChartProps> = ({data}) => {
    const styles = {
        container: {
            maxWidth: 700,
            margin: "0 auto"
        },
        tooltipWrapper: {
            background: "#616D8D",
            border: "none",
        },
        tooltip: {
            color: "#ebebeb"
        },
    };
    const chartData = data.map(d => ({date: formatDate(d.created_at), amount: d.amount}))
    return <ResponsiveContainer height={250}>
        <Wrapper>
            <AreaChart data={chartData} height={250} width={400}>
                <path opacity="0.2"
                      d="M369.454 4.29703L371 5.37129V217H0V145.025L1.54584 147.173L3.09167 149.322L4.63748 140.728L6.18332 148.248L7.72916 141.802L9.27499 167.584L10.8208 158.99L12.3667 160.064L13.9125 139.653L15.4583 143.95L17.0042 135.356L18.55 138.579H20.0958L21.6417 126.762L23.1875 138.579L24.7333 133.208L26.2792 120.317L27.825 136.431H29.3708L30.9167 151.47L32.4625 65.5297L34.0083 56.9356L35.5542 55.8614L37.1 70.901L38.6458 67.6782L40.1917 80.5693L41.7375 55.8614L43.2833 59.0842L44.8292 69.8267L46.375 70.901L47.9208 69.8267L49.4667 63.3812L51.0125 68.7525L52.5583 62.3069L54.1042 61.2327L55.65 69.8267L57.1958 68.7525L58.7417 62.3069L60.2875 61.2327L61.8333 58.0099L63.3792 61.2327L64.925 62.3069L66.4708 58.0099L68.0167 60.1584H69.5625L71.1083 66.604L72.6542 65.5297L74.2 66.604L75.7458 68.7525L77.2917 69.8267L78.8375 85.9406L80.3833 87.0148L81.9292 85.9406L83.475 87.0148L85.0208 69.8267L86.5667 70.901L88.1125 69.8267L89.6583 60.1584L91.2042 59.0842L92.75 61.2327L94.2958 74.1238L95.8417 77.3465L97.3875 64.4554L98.9333 65.5297L100.479 59.0842L102.025 69.8267L103.571 68.7525L105.117 59.0842L106.663 66.604L108.208 68.7525L109.754 66.604L111.3 60.1584L112.846 59.0842L114.392 63.3812L115.938 62.3069L117.483 39.7475L119.029 33.302L120.575 23.6337L122.121 47.2673L123.667 48.3416L125.212 47.2673L126.758 61.2327L128.304 60.1584L129.85 61.2327L131.396 77.3465L132.942 73.0495L134.488 112.797L136.033 102.054L137.579 100.98L139.125 111.723L140.671 104.203L142.217 102.054L143.762 100.98L145.308 102.054L146.854 66.604L148.4 67.6782L149.946 66.604L151.492 78.4208L153.037 77.3465L154.583 78.4208L156.129 77.3465L157.675 65.5297L159.221 67.6782L160.767 65.5297L162.312 64.4554H163.858L165.404 62.3069L166.95 78.4208L168.496 77.3465L170.042 78.4208L171.587 77.3465L173.133 78.4208L174.679 77.3465L176.225 78.4208L177.771 77.3465L179.317 62.3069L180.863 61.2327L182.408 62.3069L183.954 61.2327H185.5L187.046 60.1584L188.592 61.2327L190.137 82.7178L191.683 84.8663L193.229 74.1238L194.775 75.198L196.321 82.7178L197.867 70.901L199.412 69.8267L200.958 61.2327L202.504 60.1584L204.05 61.2327H205.596L207.142 69.8267L208.688 68.7525L210.233 64.4554L211.779 63.3812L213.325 67.6782L214.871 18.2624L216.417 29.0049L217.962 47.2673L219.508 67.6782L221.054 66.604L222.6 67.6782L224.146 66.604L225.692 54.7871L227.238 36.5247L228.783 38.6733L230.329 37.599L231.875 55.8614L233.421 75.198L234.967 59.0842L236.512 70.901L238.058 78.4208L239.604 77.3465L241.15 78.4208L242.696 77.3465L244.242 78.4208L245.787 65.5297L247.333 66.604L248.879 65.5297L250.425 87.0148L251.971 66.604L253.517 71.9752L255.062 70.901L256.608 67.6782H258.154L259.7 68.7525L261.246 77.3465L262.792 78.4208L264.338 77.3465L265.883 73.0495L267.429 71.9752L268.975 73.0495L270.521 61.2327L272.067 56.9356L273.612 71.9752L275.158 73.0495L276.704 71.9752L278.25 65.5297L279.796 64.4554L281.342 59.0842L282.887 39.7475L284.433 40.8218L285.979 33.302L287.525 37.599H289.071L290.617 35.4505L292.162 46.1931L293.708 42.9703L295.254 48.3416L296.8 61.2327L298.346 68.7525L299.892 69.8267L301.438 70.901L302.983 83.7921L304.529 82.7178L306.075 67.6782L307.621 51.5644L309.167 68.7525L310.712 62.3069L312.258 63.3812L313.804 53.7129L315.35 54.7871L316.896 53.7129L318.442 50.4901L319.987 25.7822L321.533 10.7426L323.079 9.66832L324.625 1.07426L326.171 0L327.717 10.7426L329.263 0L330.808 18.2624L332.354 5.37129L333.9 10.7426L335.446 9.66832L336.992 22.5594L338.537 46.1931L340.083 52.6386L341.629 39.7475L343.175 46.1931L344.721 71.9752L346.267 59.0842L347.812 45.1188L349.358 46.1931L350.904 44.0446L352.45 32.2277L353.996 35.4505L355.542 34.3762L357.087 33.302L358.633 34.3762L360.179 33.302L361.725 30.0792L363.271 0L364.817 1.07426L366.363 10.7426L367.908 11.8168L369.454 4.29703Z"
                      fill="url(#paint0_linear_3863_164)"/>
                <defs>
                    <linearGradient
                        id="userSpaceOnUse" x1="185.5" y1="0" x2="185.5" y2="217" gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#1C64F2"/>
                        <stop offset="1" stopOpacity="0.02"/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false}/>
                <Tooltip
                    contentStyle={styles.tooltipWrapper}
                    labelStyle={styles.tooltip}
                    formatter={value => `${value}`}
                />
                <Area
                    dataKey="amount"
                    fillOpacity={1}
                    stroke="#1C64F2"
                    strokeWidth={2}
                    fill="url(#userSpaceOnUse)"
                />

                <XAxis  className={'xaxis'} dataKey={'date'} strokeWidth={0} tickMargin={10} axisLine={false} tickLine={false}/>
                <YAxis
                    type="number"
                    orientation="right"
                    tick={{fontSize: 14}}
                    width={26}
                    tickMargin={12}
                    axisLine={false}
                    tickLine={false}
                />
            </AreaChart>
        </Wrapper>

    </ResponsiveContainer>
};

const Wrapper = styled.div`
  width: 100%;

  
.xAxis{
  .recharts-cartesian-axis-ticks .recharts-cartesian-axis-tick-value {
    fill: #616D8D;
    transform: translateX(-94px);
    font-size: 14px;
    font-weight: 600;
  }
}
  .yAxis{
    .recharts-cartesian-axis-ticks .recharts-cartesian-axis-tick-value {
      fill: #616D8D;
      transform: translateX(-10px);
      font-size: 14px;
      font-weight: 600;
    }
  }
  .recharts-surface {
    width: 110% !important;
  }

  .recharts-cartesian-axis-ticks text {

  }

  line {
    stroke-width: 0.1;
  }

`
