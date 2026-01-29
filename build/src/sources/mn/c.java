package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f39171a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39172b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39173c;

    /* renamed from: d  reason: collision with root package name */
    private final int f39174d;

    public c(int i10, int i11, int i12, int i13) {
        this.f39171a = i10;
        this.f39172b = i11;
        this.f39173c = i12;
        this.f39174d = i13;
    }

    public final int a() {
        return this.f39171a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f39171a == cVar.f39171a && this.f39172b == cVar.f39172b && this.f39173c == cVar.f39173c && this.f39174d == cVar.f39174d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f39171a) * 31) + Integer.hashCode(this.f39172b)) * 31) + Integer.hashCode(this.f39173c)) * 31) + Integer.hashCode(this.f39174d);
    }

    public String toString() {
        int i10 = this.f39171a;
        int i11 = this.f39172b;
        int i12 = this.f39173c;
        int i13 = this.f39174d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
