package net.time4j.tz.model;

import java.io.Serializable;
import java.util.Collections;
import java.util.List;
import net.time4j.tz.m;
import net.time4j.tz.p;
import net.time4j.tz.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e implements m, Serializable {
    private static final long serialVersionUID = 1374714021808040253L;
    private final p offset;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(p pVar) {
        this.offset = pVar;
    }

    @Override // net.time4j.tz.m
    public boolean a() {
        return false;
    }

    @Override // net.time4j.tz.m
    public q b(ht.f fVar) {
        return null;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.offset;
    }

    @Override // net.time4j.tz.m
    public List d(ht.a aVar, ht.g gVar) {
        return Collections.singletonList(this.offset);
    }

    @Override // net.time4j.tz.m
    public q e(ht.a aVar, ht.g gVar) {
        return null;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof e) {
            return this.offset.equals(((e) obj).offset);
        }
        return false;
    }

    public int hashCode() {
        return this.offset.hashCode();
    }

    @Override // net.time4j.tz.m
    public boolean isEmpty() {
        return true;
    }

    public String toString() {
        return "EmptyTransitionModel=" + this.offset.a();
    }
}
