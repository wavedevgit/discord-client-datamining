package io.sentry.cache.tape;

import java.io.Closeable;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c implements Iterable, Closeable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        void a(Object obj, OutputStream outputStream);

        Object b(byte[] bArr);
    }

    public static c C() {
        return new io.sentry.cache.tape.a();
    }

    public static c s(d dVar, a aVar) {
        return new b(dVar, aVar);
    }

    public abstract void E0(int i10);

    public List P(int i10) {
        int min = Math.min(i10, size());
        ArrayList arrayList = new ArrayList(min);
        Iterator it = iterator();
        for (int i11 = 0; i11 < min; i11++) {
            arrayList.add(it.next());
        }
        return Collections.unmodifiableList(arrayList);
    }

    public void clear() {
        E0(size());
    }

    public abstract void g(Object obj);

    public List p() {
        return P(size());
    }

    public abstract int size();
}
