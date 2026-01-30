package org.webrtc;

import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class RTCStats {

    /* renamed from: id  reason: collision with root package name */
    private final String f44644id;
    private final Map<String, Object> members;
    private final long timestampUs;
    private final String type;

    public RTCStats(long j10, String str, String str2, Map<String, Object> map) {
        this.timestampUs = j10;
        this.type = str;
        this.f44644id = str2;
        this.members = map;
    }

    private static void appendValue(StringBuilder sb2, Object obj) {
        if (obj instanceof Object[]) {
            Object[] objArr = (Object[]) obj;
            sb2.append('[');
            for (int i10 = 0; i10 < objArr.length; i10++) {
                if (i10 != 0) {
                    sb2.append(", ");
                }
                appendValue(sb2, objArr[i10]);
            }
            sb2.append(']');
        } else if (obj instanceof String) {
            sb2.append('\"');
            sb2.append(obj);
            sb2.append('\"');
        } else {
            sb2.append(obj);
        }
    }

    @CalledByNative
    static RTCStats create(long j10, String str, String str2, Map map) {
        return new RTCStats(j10, str, str2, map);
    }

    public String getId() {
        return this.f44644id;
    }

    public Map<String, Object> getMembers() {
        return this.members;
    }

    public double getTimestampUs() {
        return this.timestampUs;
    }

    public String getType() {
        return this.type;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("{ timestampUs: ");
        sb2.append(this.timestampUs);
        sb2.append(", type: ");
        sb2.append(this.type);
        sb2.append(", id: ");
        sb2.append(this.f44644id);
        for (Map.Entry<String, Object> entry : this.members.entrySet()) {
            sb2.append(", ");
            sb2.append(entry.getKey());
            sb2.append(": ");
            appendValue(sb2, entry.getValue());
        }
        sb2.append(" }");
        return sb2.toString();
    }
}
