package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f28017d;

    /* renamed from: e  reason: collision with root package name */
    private final a f28018e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f28019i;

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
        final Iterator f28020d;

        C0399b(Iterator it) {
            this.f28020d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f28020d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f28019i.b((byte[]) this.f28020d.next());
            } catch (IOException e10) {
                throw ((Error) d.P(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f28020d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f28017d = dVar;
        this.f28019i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void E0(int i10) {
        this.f28017d.D1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f28017d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28017d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void g(Object obj) {
        this.f28018e.reset();
        this.f28019i.a(obj, this.f28018e);
        this.f28017d.s(this.f28018e.a(), 0, this.f28018e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0399b(this.f28017d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f28017d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f28017d + '}';
    }
}
