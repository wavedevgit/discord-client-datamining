package mn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f39187a;

    /* renamed from: b  reason: collision with root package name */
    private final int f39188b;

    /* renamed from: c  reason: collision with root package name */
    private final int f39189c;

    /* renamed from: d  reason: collision with root package name */
    private final int f39190d;

    public c(int i10, int i11, int i12, int i13) {
        this.f39187a = i10;
        this.f39188b = i11;
        this.f39189c = i12;
        this.f39190d = i13;
    }

    public final int a() {
        return this.f39187a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f39187a == cVar.f39187a && this.f39188b == cVar.f39188b && this.f39189c == cVar.f39189c && this.f39190d == cVar.f39190d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f39187a) * 31) + Integer.hashCode(this.f39188b)) * 31) + Integer.hashCode(this.f39189c)) * 31) + Integer.hashCode(this.f39190d);
    }

    public String toString() {
        int i10 = this.f39187a;
        int i11 = this.f39188b;
        int i12 = this.f39189c;
        int i13 = this.f39190d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
