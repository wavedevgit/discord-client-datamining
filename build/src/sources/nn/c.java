package nn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f41930a;

    /* renamed from: b  reason: collision with root package name */
    private final int f41931b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41932c;

    /* renamed from: d  reason: collision with root package name */
    private final int f41933d;

    public c(int i10, int i11, int i12, int i13) {
        this.f41930a = i10;
        this.f41931b = i11;
        this.f41932c = i12;
        this.f41933d = i13;
    }

    public final int a() {
        return this.f41930a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f41930a == cVar.f41930a && this.f41931b == cVar.f41931b && this.f41932c == cVar.f41932c && this.f41933d == cVar.f41933d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f41930a) * 31) + Integer.hashCode(this.f41931b)) * 31) + Integer.hashCode(this.f41932c)) * 31) + Integer.hashCode(this.f41933d);
    }

    public String toString() {
        int i10 = this.f41930a;
        int i11 = this.f41931b;
        int i12 = this.f41932c;
        int i13 = this.f41933d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
