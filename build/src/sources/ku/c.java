package ku;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import ju.c0;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c {
    public static final void a(ju.h hVar, c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(dir, "dir");
        ArrayDeque arrayDeque = new ArrayDeque();
        for (c0 c0Var = dir; c0Var != null && !hVar.j(c0Var); c0Var = c0Var.i()) {
            arrayDeque.addFirst(c0Var);
        }
        if (z10 && arrayDeque.isEmpty()) {
            throw new IOException(dir + " already exists.");
        }
        Iterator<E> it = arrayDeque.iterator();
        while (it.hasNext()) {
            hVar.f((c0) it.next());
        }
    }

    public static final boolean b(ju.h hVar, c0 path) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(path, "path");
        if (hVar.m(path) != null) {
            return true;
        }
        return false;
    }

    public static final ju.g c(ju.h hVar, c0 path) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(path, "path");
        ju.g m10 = hVar.m(path);
        if (m10 != null) {
            return m10;
        }
        throw new FileNotFoundException("no such file: " + path);
    }
}
