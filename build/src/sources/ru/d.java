package ru;

import kotlin.collections.CollectionsKt;
import uu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d implements lu.b, uu.d {

    /* renamed from: a  reason: collision with root package name */
    public static final d f48719a = new d();

    private d() {
    }

    @Override // lu.b
    /* renamed from: a */
    public Boolean f(Object obj, Object obj2) {
        return Boolean.valueOf(!b(CollectionsKt.firstOrNull(qv.a.c(obj))));
    }

    public boolean b(Object obj) {
        return d.a.a(this, obj);
    }
}
