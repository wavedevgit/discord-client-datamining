package bc;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c extends h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f6547a;

    /* renamed from: b  reason: collision with root package name */
    private final kc.a f6548b;

    /* renamed from: c  reason: collision with root package name */
    private final kc.a f6549c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6550d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context, kc.a aVar, kc.a aVar2, String str) {
        if (context != null) {
            this.f6547a = context;
            if (aVar != null) {
                this.f6548b = aVar;
                if (aVar2 != null) {
                    this.f6549c = aVar2;
                    if (str != null) {
                        this.f6550d = str;
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
        return this.f6547a;
    }

    @Override // bc.h
    public String c() {
        return this.f6550d;
    }

    @Override // bc.h
    public kc.a d() {
        return this.f6549c;
    }

    @Override // bc.h
    public kc.a e() {
        return this.f6548b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f6547a.equals(hVar.b()) && this.f6548b.equals(hVar.e()) && this.f6549c.equals(hVar.d()) && this.f6550d.equals(hVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f6547a.hashCode() ^ 1000003) * 1000003) ^ this.f6548b.hashCode()) * 1000003) ^ this.f6549c.hashCode()) * 1000003) ^ this.f6550d.hashCode();
    }

    public String toString() {
        return "CreationContext{applicationContext=" + this.f6547a + ", wallClock=" + this.f6548b + ", monotonicClock=" + this.f6549c + ", backendName=" + this.f6550d + "}";
    }
}
