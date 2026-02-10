package bc;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f6441a;

    /* renamed from: b  reason: collision with root package name */
    private final kc.a f6442b;

    /* renamed from: c  reason: collision with root package name */
    private final kc.a f6443c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6444d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context, kc.a aVar, kc.a aVar2, String str) {
        if (context != null) {
            this.f6441a = context;
            if (aVar != null) {
                this.f6442b = aVar;
                if (aVar2 != null) {
                    this.f6443c = aVar2;
                    if (str != null) {
                        this.f6444d = str;
                        return;
                    }
                    throw new NullPointerException("Null backendName");
                }
                throw new NullPointerException("Null monotonicClock");
            }
            throw new NullPointerException("Null wallClock");
        }
        throw new NullPointerException("Null applicationContext");
    }

    @Override // bc.h
    public Context b() {
        return this.f6441a;
    }

    @Override // bc.h
    public String c() {
        return this.f6444d;
    }

    @Override // bc.h
    public kc.a d() {
        return this.f6443c;
    }

    @Override // bc.h
    public kc.a e() {
        return this.f6442b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f6441a.equals(hVar.b()) && this.f6442b.equals(hVar.e()) && this.f6443c.equals(hVar.d()) && this.f6444d.equals(hVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f6441a.hashCode() ^ 1000003) * 1000003) ^ this.f6442b.hashCode()) * 1000003) ^ this.f6443c.hashCode()) * 1000003) ^ this.f6444d.hashCode();
    }

    public String toString() {
        return "CreationContext{applicationContext=" + this.f6441a + ", wallClock=" + this.f6442b + ", monotonicClock=" + this.f6443c + ", backendName=" + this.f6444d + "}";
    }
}
