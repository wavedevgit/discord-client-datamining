package net.time4j.tz;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends l implements m {
    private static final j G = new j(p.f40908v);
    private static final long serialVersionUID = 7807230388259573234L;
    private final p offset;

    private j(p pVar) {
        if (pVar.k() == 0) {
            this.offset = pVar;
            return;
        }
        int l10 = pVar.l();
        this.offset = p.t(pVar.k() < 0 ? l10 - 1 : l10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static j R(p pVar) {
        if (pVar.l() == 0 && pVar.k() == 0) {
            return G;
        }
        return new j(pVar);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        objectInputStream.defaultReadObject();
        if (this.offset.k() == 0) {
            return;
        }
        throw new InvalidObjectException("Fractional offset is invalid.");
    }

    @Override // net.time4j.tz.l
    public p A(gt.a aVar, gt.g gVar) {
        return this.offset;
    }

    @Override // net.time4j.tz.l
    public p B(gt.f fVar) {
        return this.offset;
    }

    @Override // net.time4j.tz.l
    public o E() {
        return l.f40846o;
    }

    @Override // net.time4j.tz.l
    public boolean I(gt.f fVar) {
        return false;
    }

    @Override // net.time4j.tz.l
    public boolean J() {
        return true;
    }

    @Override // net.time4j.tz.l
    public boolean K(gt.a aVar, gt.g gVar) {
        return false;
    }

    @Override // net.time4j.tz.l
    public l Q(o oVar) {
        return this;
    }

    @Override // net.time4j.tz.m
    public List a(gt.a aVar, gt.g gVar) {
        return Collections.singletonList(this.offset);
    }

    @Override // net.time4j.tz.m
    public boolean b() {
        return false;
    }

    @Override // net.time4j.tz.m
    public p c() {
        return this.offset;
    }

    @Override // net.time4j.tz.m
    public q d(gt.f fVar) {
        return null;
    }

    @Override // net.time4j.tz.m
    public q e(gt.a aVar, gt.g gVar) {
        return null;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof j) {
            return this.offset.equals(((j) obj).offset);
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
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append('[');
        sb2.append(j.class.getName());
        sb2.append(':');
        sb2.append(this.offset);
        sb2.append(']');
        return sb2.toString();
    }

    @Override // net.time4j.tz.l
    public String w(d dVar, Locale locale) {
        if (dVar.a()) {
            return this.offset.toString();
        }
        return this.offset.a();
    }

    @Override // net.time4j.tz.l
    public m y() {
        return this;
    }

    @Override // net.time4j.tz.l
    public k z() {
        return this.offset;
    }
}
