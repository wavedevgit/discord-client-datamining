package hr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    private int f27655a;

    /* renamed from: b  reason: collision with root package name */
    private int f27656b;

    /* renamed from: c  reason: collision with root package name */
    private int f27657c;

    public c(int i10, int i11, int i12) {
        this.f27655a = i10;
        this.f27656b = i11;
        this.f27657c = i12;
    }

    public int a() {
        return this.f27656b;
    }

    public int b() {
        return this.f27657c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass()) {
            c cVar = (c) obj;
            if (this.f27655a == cVar.f27655a && this.f27656b == cVar.f27656b && this.f27657c == cVar.f27657c) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return (((this.f27655a * 31) + this.f27656b) * 31) + this.f27657c;
    }
}
