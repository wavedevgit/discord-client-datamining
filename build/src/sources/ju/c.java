package ju;

import iu.c0;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;
import kotlin.collections.ArrayDeque;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c {
    public static final void a(iu.h hVar, c0 dir, boolean z10) {
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

    public static final boolean b(iu.h hVar, c0 path) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(path, "path");
        if (hVar.m(path) != null) {
            return true;
        }
        return false;
    }

    public static final iu.g c(iu.h hVar, c0 path) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(path, "path");
        iu.g m10 = hVar.m(path);
        if (m10 != null) {
            return m10;
        }
        throw new FileNotFoundException("no such file: " + path);
    }
}
