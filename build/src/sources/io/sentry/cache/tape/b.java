package io.sentry.cache.tape;

import io.sentry.cache.tape.c;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class b extends c {

    /* renamed from: d  reason: collision with root package name */
    private final d f28217d;

    /* renamed from: e  reason: collision with root package name */
    private final a f28218e = new a();

    /* renamed from: i  reason: collision with root package name */
    final c.a f28219i;

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
    private final class C0425b implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        final Iterator f28220d;

        C0425b(Iterator it) {
            this.f28220d = it;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f28220d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            try {
                return b.this.f28219i.b((byte[]) this.f28220d.next());
            } catch (IOException e10) {
                throw ((Error) d.Q(e10));
            }
        }

        @Override // java.util.Iterator
        public void remove() {
            this.f28220d.remove();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(d dVar, c.a aVar) {
        this.f28217d = dVar;
        this.f28219i = aVar;
    }

    @Override // io.sentry.cache.tape.c
    public void C0(int i10) {
        this.f28217d.z1(i10);
    }

    @Override // io.sentry.cache.tape.c
    public void clear() {
        this.f28217d.clear();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28217d.close();
    }

    @Override // io.sentry.cache.tape.c
    public void g(Object obj) {
        this.f28218e.reset();
        this.f28219i.a(obj, this.f28218e);
        this.f28217d.s(this.f28218e.a(), 0, this.f28218e.size());
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        return new C0425b(this.f28217d.iterator());
    }

    @Override // io.sentry.cache.tape.c
    public int size() {
        return this.f28217d.size();
    }

    public String toString() {
        return "FileObjectQueue{queueFile=" + this.f28217d + '}';
    }
}
