package fo;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f23988a;

    /* renamed from: b  reason: collision with root package name */
    private final int f23989b;

    /* renamed from: c  reason: collision with root package name */
    private final int f23990c;

    /* renamed from: d  reason: collision with root package name */
    private final int f23991d;

    public c(int i10, int i11, int i12, int i13) {
        this.f23988a = i10;
        this.f23989b = i11;
        this.f23990c = i12;
        this.f23991d = i13;
    }

    public final int a() {
        return this.f23988a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f23988a == cVar.f23988a && this.f23989b == cVar.f23989b && this.f23990c == cVar.f23990c && this.f23991d == cVar.f23991d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f23988a) * 31) + Integer.hashCode(this.f23989b)) * 31) + Integer.hashCode(this.f23990c)) * 31) + Integer.hashCode(this.f23991d);
    }

    public String toString() {
        int i10 = this.f23988a;
        int i11 = this.f23989b;
        int i12 = this.f23990c;
        int i13 = this.f23991d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
