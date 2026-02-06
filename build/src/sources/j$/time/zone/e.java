package j$.time.zone;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import j$.time.DateTimeException;
import java.security.AccessController;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;
import java.util.TimeZone;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class e {

    /* renamed from: b  reason: collision with root package name */
    public static final CopyOnWriteArrayList f29544b;

    /* renamed from: c  reason: collision with root package name */
    public static final ConcurrentMap f29545c;

    /* renamed from: a  reason: collision with root package name */
    public final Set f29546a;

    static {
        CopyOnWriteArrayList copyOnWriteArrayList = new CopyOnWriteArrayList();
        f29544b = copyOnWriteArrayList;
        f29545c = new ConcurrentHashMap(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING, 0.75f, 2);
        ArrayList arrayList = new ArrayList();
        AccessController.doPrivileged(new d(arrayList));
        copyOnWriteArrayList.addAll(arrayList);
    }

    public static c a(String str) {
        Objects.requireNonNull(str, "zoneId");
        ConcurrentHashMap concurrentHashMap = (ConcurrentHashMap) f29545c;
        e eVar = (e) concurrentHashMap.get(str);
        if (eVar == null) {
            if (concurrentHashMap.isEmpty()) {
                throw new DateTimeException("No time-zone data files registered");
            }
            throw new DateTimeException("Unknown time-zone ID: ".concat(str));
        } else if (eVar.f29546a.contains(str)) {
            return new c(TimeZone.getTimeZone(str));
        } else {
            throw new DateTimeException("Not a built-in time zone: ".concat(str));
        }
    }

    public static void b(e eVar) {
        Objects.requireNonNull(eVar, "provider");
        for (String str : eVar.f29546a) {
            Objects.requireNonNull(str, "zoneId");
            if (((e) ((ConcurrentHashMap) f29545c).putIfAbsent(str, eVar)) != null) {
                throw new DateTimeException("Unable to register zone as one already registered with that ID: " + str + ", currently loading from provider: " + eVar);
            }
        }
        f29544b.add(eVar);
    }

    public e() {
        LinkedHashSet linkedHashSet = new LinkedHashSet();
        for (String str : TimeZone.getAvailableIDs()) {
            linkedHashSet.add(str);
        }
        this.f29546a = Collections.unmodifiableSet(linkedHashSet);
    }
}
