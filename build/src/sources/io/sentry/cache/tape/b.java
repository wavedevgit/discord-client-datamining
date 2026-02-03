package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f29767d;

    /* renamed from: e  reason: collision with root package name */
    private final a f29768e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f29769i;

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
    private final class C0398b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f29770d;

        C0398b(Iterator it) {
            this.f29770d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f29770d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f29769i.b((byte[]) this.f29770d.next());
            } catch (IOException e10) {
                throw ((Error) d.A0(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f29770d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f29767d = dVar;
        this.f29769i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void I0(int i10) {
        this.f29767d.B1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f29767d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29767d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void h(Object obj) {
        this.f29768e.reset();
        this.f29769i.a(obj, this.f29768e);
        this.f29767d.x(this.f29768e.a(), 0, this.f29768e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0398b(this.f29767d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f29767d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f29767d + '}';
    }
}
