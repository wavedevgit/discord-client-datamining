package j0;

import androidx.concurrent.futures.c;
import j0.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends t.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f29596a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29597b;

    /* renamed from: c  reason: collision with root package name */
    private final c.a f29598c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(int i10, int i11, c.a aVar) {
        this.f29596a = i10;
        this.f29597b = i11;
        if (aVar != null) {
            this.f29598c = aVar;
            return;
        }
        throw new NullPointerException("Null completer");
    }

    @Override // j0.t.b
    c.a a() {
        return this.f29598c;
    }

    @Override // j0.t.b
    int b() {
        return this.f29596a;
    }

    @Override // j0.t.b
    int c() {
        return this.f29597b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof t.b) {
            t.b bVar = (t.b) obj;
            if (this.f29596a == bVar.b() && this.f29597b == bVar.c() && this.f29598c.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((this.f29596a ^ 1000003) * 1000003) ^ this.f29597b) * 1000003) ^ this.f29598c.hashCode();
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.f29596a + ", rotationDegrees=" + this.f29597b + ", completer=" + this.f29598c + "}";
    }
}
