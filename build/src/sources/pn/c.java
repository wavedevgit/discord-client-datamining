package pn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f46222a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46223b;

    /* renamed from: c  reason: collision with root package name */
    private final int f46224c;

    /* renamed from: d  reason: collision with root package name */
    private final int f46225d;

    public c(int i10, int i11, int i12, int i13) {
        this.f46222a = i10;
        this.f46223b = i11;
        this.f46224c = i12;
        this.f46225d = i13;
    }

    public final int a() {
        return this.f46222a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f46222a == cVar.f46222a && this.f46223b == cVar.f46223b && this.f46224c == cVar.f46224c && this.f46225d == cVar.f46225d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f46222a) * 31) + Integer.hashCode(this.f46223b)) * 31) + Integer.hashCode(this.f46224c)) * 31) + Integer.hashCode(this.f46225d);
    }

    public String toString() {
        int i10 = this.f46222a;
        int i11 = this.f46223b;
        int i12 = this.f46224c;
        int i13 = this.f46225d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
