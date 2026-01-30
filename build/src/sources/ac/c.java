package ac;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends h {

    /* renamed from: a  reason: collision with root package name */
    private final Context f453a;

    /* renamed from: b  reason: collision with root package name */
    private final jc.a f454b;

    /* renamed from: c  reason: collision with root package name */
    private final jc.a f455c;

    /* renamed from: d  reason: collision with root package name */
    private final String f456d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(Context context, jc.a aVar, jc.a aVar2, String str) {
        if (context != null) {
            this.f453a = context;
            if (aVar != null) {
                this.f454b = aVar;
                if (aVar2 != null) {
                    this.f455c = aVar2;
                    if (str != null) {
                        this.f456d = str;
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

    @Override // ac.h
    public Context b() {
        return this.f453a;
    }

    @Override // ac.h
    public String c() {
        return this.f456d;
    }

    @Override // ac.h
    public jc.a d() {
        return this.f455c;
    }

    @Override // ac.h
    public jc.a e() {
        return this.f454b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            h hVar = (h) obj;
            if (this.f453a.equals(hVar.b()) && this.f454b.equals(hVar.e()) && this.f455c.equals(hVar.d()) && this.f456d.equals(hVar.c())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((this.f453a.hashCode() ^ 1000003) * 1000003) ^ this.f454b.hashCode()) * 1000003) ^ this.f455c.hashCode()) * 1000003) ^ this.f456d.hashCode();
    }

    public String toString() {
        return "CreationContext{applicationContext=" + this.f453a + ", wallClock=" + this.f454b + ", monotonicClock=" + this.f455c + ", backendName=" + this.f456d + "}";
    }
}
