package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f29152d;

    /* renamed from: e  reason: collision with root package name */
    private final a f29153e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f29154i;

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
        final Iterator f29155d;

        C0400b(Iterator it) {
            this.f29155d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f29155d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f29154i.b((byte[]) this.f29155d.next());
            } catch (IOException e10) {
                throw ((Error) d.Q(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f29155d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f29152d = dVar;
        this.f29154i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void H0(int i10) {
        this.f29152d.f1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f29152d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29152d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void i(Object obj) {
        this.f29153e.reset();
        this.f29154i.a(obj, this.f29153e);
        this.f29152d.s(this.f29153e.a(), 0, this.f29153e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0400b(this.f29152d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f29152d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f29152d + '}';
    }
}
