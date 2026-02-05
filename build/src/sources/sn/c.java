package sn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f49838a;

    /* renamed from: b  reason: collision with root package name */
    private final int f49839b;

    /* renamed from: c  reason: collision with root package name */
    private final int f49840c;

    /* renamed from: d  reason: collision with root package name */
    private final int f49841d;

    public c(int i10, int i11, int i12, int i13) {
        this.f49838a = i10;
        this.f49839b = i11;
        this.f49840c = i12;
        this.f49841d = i13;
    }

    public final int a() {
        return this.f49838a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f49838a == cVar.f49838a && this.f49839b == cVar.f49839b && this.f49840c == cVar.f49840c && this.f49841d == cVar.f49841d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f49838a) * 31) + Integer.hashCode(this.f49839b)) * 31) + Integer.hashCode(this.f49840c)) * 31) + Integer.hashCode(this.f49841d);
    }

    public String toString() {
        int i10 = this.f49838a;
        int i11 = this.f49839b;
        int i12 = this.f49840c;
        int i13 = this.f49841d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
