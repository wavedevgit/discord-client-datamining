package com.google.android.gms.internal.play_billing;

import java.util.Iterator;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c2 implements Iterator {

    /* renamed from: d  reason: collision with root package name */
    private final Iterator f13802d;

    public c2(Iterator it) {
        this.f13802d = it;
    }

    @Override // java.util.Iterator
    public final boolean hasNext() {
        return this.f13802d.hasNext();
    }

    @Override // java.util.Iterator
    public final /* bridge */ /* synthetic */ Object next() {
        Map.Entry entry = (Map.Entry) this.f13802d.next();
        entry.getValue();
        return entry;
    }

    @Override // java.util.Iterator
    public final void remove() {
        this.f13802d.remove();
    }
}
