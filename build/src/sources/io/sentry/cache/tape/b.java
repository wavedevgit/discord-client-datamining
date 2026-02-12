package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f29153d;

    /* renamed from: e  reason: collision with root package name */
    private final a f29154e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f29155i;

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
    private final class C0400b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f29156d;

        C0400b(Iterator it) {
            this.f29156d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f29156d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f29155i.b((byte[]) this.f29156d.next());
            } catch (IOException e10) {
                throw ((Error) d.Q(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f29156d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f29153d = dVar;
        this.f29155i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void H0(int i10) {
        this.f29153d.f1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f29153d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29153d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void i(Object obj) {
        this.f29154e.reset();
        this.f29155i.a(obj, this.f29154e);
        this.f29153d.s(this.f29154e.a(), 0, this.f29154e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0400b(this.f29153d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f29153d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f29153d + '}';
    }
}
