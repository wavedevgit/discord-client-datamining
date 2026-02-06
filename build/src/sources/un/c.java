package un;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f51684a;

    /* renamed from: b  reason: collision with root package name */
    private final int f51685b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51686c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51687d;

    public c(int i10, int i11, int i12, int i13) {
        this.f51684a = i10;
        this.f51685b = i11;
        this.f51686c = i12;
        this.f51687d = i13;
    }

    public final int a() {
        return this.f51684a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f51684a == cVar.f51684a && this.f51685b == cVar.f51685b && this.f51686c == cVar.f51686c && this.f51687d == cVar.f51687d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f51684a) * 31) + Integer.hashCode(this.f51685b)) * 31) + Integer.hashCode(this.f51686c)) * 31) + Integer.hashCode(this.f51687d);
    }

    public String toString() {
        int i10 = this.f51684a;
        int i11 = this.f51685b;
        int i12 = this.f51686c;
        int i13 = this.f51687d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
