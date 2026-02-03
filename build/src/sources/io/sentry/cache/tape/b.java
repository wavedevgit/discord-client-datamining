package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f29406d;

    /* renamed from: e  reason: collision with root package name */
    private final a f29407e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f29408i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class a extends ByteArrayOutputStream {
        a() {
        }

        byte[] a() {
            return ((ByteArrayOutputStream) this).buf;
        }
    }

    /* renamed from: io.sentry.cache.tape.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private final class C0399b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f29409d;

        C0399b(Iterator it) {
            this.f29409d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f29409d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f29408i.b((byte[]) this.f29409d.next());
            } catch (IOException e10) {
                throw ((Error) d.t0(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f29409d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f29406d = dVar;
        this.f29408i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void D0(int i10) {
        this.f29406d.B1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f29406d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29406d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void h(Object obj) {
        this.f29407e.reset();
        this.f29408i.a(obj, this.f29407e);
        this.f29406d.x(this.f29407e.a(), 0, this.f29407e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0399b(this.f29406d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f29406d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f29406d + '}';
    }
}
