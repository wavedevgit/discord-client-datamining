package vn;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final int f52592a;

    /* renamed from: b  reason: collision with root package name */
    private final int f52593b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52594c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52595d;

    public c(int i10, int i11, int i12, int i13) {
        this.f52592a = i10;
        this.f52593b = i11;
        this.f52594c = i12;
        this.f52595d = i13;
    }

    public final int a() {
        return this.f52592a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (this.f52592a == cVar.f52592a && this.f52593b == cVar.f52593b && this.f52594c == cVar.f52594c && this.f52595d == cVar.f52595d) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((Integer.hashCode(this.f52592a) * 31) + Integer.hashCode(this.f52593b)) * 31) + Integer.hashCode(this.f52594c)) * 31) + Integer.hashCode(this.f52595d);
    }

    public String toString() {
        int i10 = this.f52592a;
        int i11 = this.f52593b;
        int i12 = this.f52594c;
        int i13 = this.f52595d;
        return "AudioConfiguration(sampleRateInHz=" + i10 + ", channelConfig=" + i11 + ", audioFormat=" + i12 + ", bufferSizeInBytes=" + i13 + ")";
    }
}
