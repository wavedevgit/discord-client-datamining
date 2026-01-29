package net.time4j.tz.model;

import java.util.Comparator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum k implements Comparator {
    INSTANCE;

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(d dVar, d dVar2) {
        int compareTo = dVar.b(2000).compareTo(dVar2.b(2000));
        if (compareTo == 0) {
            return dVar.f().compareTo(dVar2.f());
        }
        return compareTo;
    }
}
