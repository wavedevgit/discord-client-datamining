package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f51732a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51733b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51734c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51735d;

    public c(int i10, int i11, int i12, int i13) {
        this.f51732a = i10;
        this.f51733b = i11;
        this.f51734c = i12;
        this.f51735d = i13;
    }

    public final int a() {
        return this.f51732a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f51732a == cVar.f51732a && this.f51733b == cVar.f51733b && this.f51734c == cVar.f51734c && this.f51735d == cVar.f51735d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f51732a) * 31) + Integer.hashCode(this.f51733b)) * 31) + Integer.hashCode(this.f51734c)) * 31) + Integer.hashCode(this.f51735d);
    }

    public String toString() {
        int i10 = this.f51732a;
        int i11 = this.f51733b;
        int i12 = this.f51734c;
        int i13 = this.f51735d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
