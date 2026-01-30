package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f29840d;

    /* renamed from: e  reason: collision with root package name */
    private final a f29841e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f29842i;

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
    private final class C0396b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f29843d;

        C0396b(Iterator it) {
            this.f29843d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f29843d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f29842i.b((byte[]) this.f29843d.next());
            } catch (IOException e10) {
                throw ((Error) d.A0(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f29843d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f29840d = dVar;
        this.f29842i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void C0(int i10) {
        this.f29840d.B1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f29840d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29840d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void h(Object obj) {
        this.f29841e.reset();
        this.f29842i.a(obj, this.f29841e);
        this.f29840d.x(this.f29841e.a(), 0, this.f29841e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0396b(this.f29840d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f29840d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f29840d + '}';
    }
}
