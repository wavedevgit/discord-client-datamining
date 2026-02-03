package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f31430a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31431b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f31432c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f31430a = i10;
        this.f31431b = i11;
        if (aVar != null) {
            this.f31432c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f31432c;
    }

    @Override // j0.t.b
    int b() {
        return this.f31430a;
    }

    @Override // j0.t.b
    int c() {
        return this.f31431b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f31430a == bVar.b() && this.f31431b == bVar.c() && this.f31432c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f31430a ^ 1000003) * 1000003) ^ this.f31431b) * 1000003) ^ this.f31432c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f31430a + ", rotationDegrees=" + this.f31431b + ", completer=" + this.f31432c + "}";
    }
}
