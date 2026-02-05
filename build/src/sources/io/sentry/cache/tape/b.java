package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f28825d;

    /* renamed from: e  reason: collision with root package name */
    private final a f28826e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f28827i;

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
    private final class C0405b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f28828d;

        C0405b(Iterator it) {
            this.f28828d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f28828d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f28827i.b((byte[]) this.f28828d.next());
            } catch (IOException e10) {
                throw ((Error) d.V(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f28828d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f28825d = dVar;
        this.f28827i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void C0(int i10) {
        this.f28825d.B1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f28825d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28825d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void h(Object obj) {
        this.f28826e.reset();
        this.f28827i.a(obj, this.f28826e);
        this.f28825d.y(this.f28826e.a(), 0, this.f28826e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0405b(this.f28825d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f28825d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f28825d + '}';
    }
}
