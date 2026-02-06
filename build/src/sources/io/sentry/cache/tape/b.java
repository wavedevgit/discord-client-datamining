package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f27969d;

    /* renamed from: e  reason: collision with root package name */
    private final a f27970e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f27971i;

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
        final Iterator f27972d;

        C0399b(Iterator it) {
            this.f27972d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f27972d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f27971i.b((byte[]) this.f27972d.next());
            } catch (IOException e10) {
                throw ((Error) d.P(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f27972d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f27969d = dVar;
        this.f27971i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void E0(int i10) {
        this.f27969d.D1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f27969d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27969d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void g(Object obj) {
        this.f27970e.reset();
        this.f27971i.a(obj, this.f27970e);
        this.f27969d.s(this.f27970e.a(), 0, this.f27970e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0399b(this.f27969d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f27969d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f27969d + '}';
    }
}
