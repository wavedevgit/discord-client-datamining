package iu;

import java.util.ArrayList;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i extends h {

    /* renamed from: e  reason: collision with root package name */
    private final h f31265e;

    public i(h delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f31265e = delegate;
    }

    @Override // iu.h
    public Sink b(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        return this.f31265e.b(r(file, "appendingSink", "file"), z10);
    }

    @Override // iu.h
    public void c(c0 source, c0 target) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(target, "target");
        this.f31265e.c(r(source, "atomicMove", "source"), r(target, "atomicMove", "target"));
    }

    @Override // iu.h
    public void g(c0 dir, boolean z10) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        this.f31265e.g(r(dir, "createDirectory", "dir"), z10);
    }

    @Override // iu.h
    public void i(c0 path, boolean z10) {
        Intrinsics.checkNotNullParameter(path, "path");
        this.f31265e.i(r(path, "delete", "path"), z10);
    }

    @Override // iu.h
    public List k(c0 dir) {
        Intrinsics.checkNotNullParameter(dir, "dir");
        c0 r10 = r(dir, "list", "dir");
        ArrayList arrayList = new ArrayList();
        for (c0 c0Var : this.f31265e.k(r10)) {
            arrayList.add(s(c0Var, "list"));
        }
        CollectionsKt.z(arrayList);
        return arrayList;
    }

    @Override // iu.h
    public g m(c0 path) {
        Intrinsics.checkNotNullParameter(path, "path");
        g m10 = this.f31265e.m(r(path, "metadataOrNull", "path"));
        if (m10 == null) {
            return null;
        }
        if (m10.d() == null) {
            return m10;
        }
        return g.b(m10, false, false, s(m10.d(), "metadataOrNull"), null, null, null, null, null, 251, null);
    }

    @Override // iu.h
    public f n(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return this.f31265e.n(r(file, "openReadOnly", "file"));
    }

    @Override // iu.h
    public Sink p(c0 file, boolean z10) {
        Intrinsics.checkNotNullParameter(file, "file");
        return this.f31265e.p(r(file, "sink", "file"), z10);
    }

    @Override // iu.h
    public Source q(c0 file) {
        Intrinsics.checkNotNullParameter(file, "file");
        return this.f31265e.q(r(file, "source", "file"));
    }

    public c0 r(c0 path, String functionName, String parameterName) {
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(functionName, "functionName");
        Intrinsics.checkNotNullParameter(parameterName, "parameterName");
        return path;
    }

    public c0 s(c0 path, String functionName) {
        Intrinsics.checkNotNullParameter(path, "path");
        Intrinsics.checkNotNullParameter(functionName, "functionName");
        return path;
    }

    public String toString() {
        return Reflection.getOrCreateKotlinClass(getClass()).getSimpleName() + '(' + this.f31265e + ')';
    }
}
