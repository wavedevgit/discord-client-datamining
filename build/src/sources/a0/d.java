package a0;

import a0.r0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends r0.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f24a;

    /* renamed from: b  reason: collision with root package name */
    private final Class f25b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f26c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, Class cls, Object obj) {
        if (str != null) {
            this.f24a = str;
            if (cls != null) {
                this.f25b = cls;
                this.f26c = obj;
                return;
            }
            throw new NullPointerException("Null valueClass");
        }
        throw new NullPointerException("Null id");
    }

    @Override // a0.r0.a
    public String c() {
        return this.f24a;
    }

    @Override // a0.r0.a
    public Object d() {
        return this.f26c;
    }

    @Override // a0.r0.a
    public Class e() {
        return this.f25b;
    }

    public boolean equals(Object obj) {
        Object obj2;
        if (obj == this) {
            return true;
        }
        if (obj instanceof r0.a) {
            r0.a aVar = (r0.a) obj;
            if (this.f24a.equals(aVar.c()) && this.f25b.equals(aVar.e()) && ((obj2 = this.f26c) != null ? obj2.equals(aVar.d()) : aVar.d() == null)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (((this.f24a.hashCode() ^ 1000003) * 1000003) ^ this.f25b.hashCode()) * 1000003;
        Object obj = this.f26c;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        return hashCode2 ^ hashCode;
    }

    public String toString() {
        return "Option{id=" + this.f24a + ", valueClass=" + this.f25b + ", token=" + this.f26c + "}";
    }
}
