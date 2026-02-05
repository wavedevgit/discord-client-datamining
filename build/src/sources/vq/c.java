package vq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f52349a;

    /* renamed from: b  reason: collision with root package name */
    private int f52350b;

    /* renamed from: c  reason: collision with root package name */
    private int f52351c;

    public c(int i10, int i11, int i12) {
        this.f52349a = i10;
        this.f52350b = i11;
        this.f52351c = i12;
    }

    public int a() {
        return this.f52350b;
    }

    public int b() {
        return this.f52351c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f52349a == cVar.f52349a && this.f52350b == cVar.f52350b && this.f52351c == cVar.f52351c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f52349a * 31) + this.f52350b) * 31) + this.f52351c;
    }
}
