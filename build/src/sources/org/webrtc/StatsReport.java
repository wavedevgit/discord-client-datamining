package org.webrtc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class StatsReport {

    /* renamed from: id  reason: collision with root package name */
    public final String f44414id;
    public final double timestamp;
    public final String type;
    public final Value[] values;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class Value {
        public final String name;
        public final String value;

        @CalledByNative("Value")
        public Value(String str, String str2) {
            this.name = str;
            this.value = str2;
        }

        public String toString() {
            return "[" + this.name + ": " + this.value + "]";
        }
    }

    @CalledByNative
    public StatsReport(String str, String str2, double d10, Value[] valueArr) {
        this.f44414id = str;
        this.type = str2;
        this.timestamp = d10;
        this.values = valueArr;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("id: ");
        sb2.append(this.f44414id);
        sb2.append(", type: ");
        sb2.append(this.type);
        sb2.append(", timestamp: ");
        sb2.append(this.timestamp);
        sb2.append(", values: ");
        int i10 = 0;
        while (true) {
            Value[] valueArr = this.values;
            if (i10 < valueArr.length) {
                sb2.append(valueArr[i10].toString());
                sb2.append(", ");
                i10++;
            } else {
                return sb2.toString();
            }
        }
    }
}
