package io.sentry.android.replay.gestures;

import android.view.MotionEvent;
import io.sentry.android.replay.s;
import io.sentry.rrweb.e;
import io.sentry.rrweb.f;
import io.sentry.transport.p;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: e  reason: collision with root package name */
    public static final a f29524e = new a(null);

    /* renamed from: f  reason: collision with root package name */
    public static final int f29525f = 8;

    /* renamed from: a  reason: collision with root package name */
    private final p f29526a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashMap f29527b;

    /* renamed from: c  reason: collision with root package name */
    private long f29528c;

    /* renamed from: d  reason: collision with root package name */
    private long f29529d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public b(p dateProvider) {
        Intrinsics.checkNotNullParameter(dateProvider, "dateProvider");
        this.f29526a = dateProvider;
        this.f29527b = new LinkedHashMap(10);
    }

    public final List a(MotionEvent event, s recorderConfig) {
        List list;
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        int actionMasked = event.getActionMasked();
        int i10 = 10;
        int i11 = 0;
        List list2 = null;
        if (actionMasked != 0) {
            if (actionMasked != 1) {
                if (actionMasked != 2) {
                    if (actionMasked != 3) {
                        if (actionMasked != 5) {
                            if (actionMasked != 6) {
                                return null;
                            }
                        }
                    } else {
                        this.f29527b.clear();
                        e eVar = new e();
                        eVar.f(this.f29526a.a());
                        eVar.u(event.getX() * recorderConfig.e());
                        eVar.v(event.getY() * recorderConfig.f());
                        eVar.q(0);
                        eVar.s(0);
                        eVar.r(e.b.TouchCancel);
                        return CollectionsKt.e(eVar);
                    }
                } else {
                    long a10 = this.f29526a.a();
                    long j10 = this.f29529d;
                    if (j10 != 0 && j10 + 50 > a10) {
                        return null;
                    }
                    this.f29529d = a10;
                    Set<Integer> keySet = this.f29527b.keySet();
                    Intrinsics.checkNotNullExpressionValue(keySet, "<get-keys>(...)");
                    for (Integer num : keySet) {
                        Intrinsics.checkNotNull(num);
                        int findPointerIndex = event.findPointerIndex(num.intValue());
                        if (findPointerIndex == -1) {
                            list = list2;
                        } else {
                            if (this.f29528c == 0) {
                                this.f29528c = a10;
                            }
                            Object obj = this.f29527b.get(num);
                            Intrinsics.checkNotNull(obj);
                            f.b bVar = new f.b();
                            bVar.i(event.getX(findPointerIndex) * recorderConfig.e());
                            bVar.j(event.getY(findPointerIndex) * recorderConfig.f());
                            bVar.f(i11);
                            list = list2;
                            bVar.g(a10 - this.f29528c);
                            ((Collection) obj).add(bVar);
                        }
                        list2 = list;
                        i11 = 0;
                    }
                    List list3 = list2;
                    long j11 = a10 - this.f29528c;
                    if (j11 > 500) {
                        ArrayList arrayList = new ArrayList(this.f29527b.size());
                        Iterator it = this.f29527b.entrySet().iterator();
                        while (it.hasNext()) {
                            Map.Entry entry = (Map.Entry) it.next();
                            int intValue = ((Number) entry.getKey()).intValue();
                            ArrayList<f.b> arrayList2 = (ArrayList) entry.getValue();
                            if (!arrayList2.isEmpty()) {
                                f fVar = new f();
                                fVar.f(a10);
                                ArrayList arrayList3 = new ArrayList(CollectionsKt.w(arrayList2, i10));
                                for (f.b bVar2 : arrayList2) {
                                    bVar2.g(bVar2.e() - j11);
                                    arrayList3.add(bVar2);
                                    it = it;
                                }
                                fVar.n(arrayList3);
                                fVar.m(intValue);
                                arrayList.add(fVar);
                                Object obj2 = this.f29527b.get(Integer.valueOf(intValue));
                                Intrinsics.checkNotNull(obj2);
                                ((ArrayList) obj2).clear();
                                it = it;
                                i10 = 10;
                            }
                        }
                        this.f29528c = 0L;
                        return arrayList;
                    }
                    return list3;
                }
            }
            int pointerId = event.getPointerId(event.getActionIndex());
            int findPointerIndex2 = event.findPointerIndex(pointerId);
            if (findPointerIndex2 == -1) {
                return null;
            }
            this.f29527b.remove(Integer.valueOf(pointerId));
            e eVar2 = new e();
            eVar2.f(this.f29526a.a());
            eVar2.u(event.getX(findPointerIndex2) * recorderConfig.e());
            eVar2.v(event.getY(findPointerIndex2) * recorderConfig.f());
            eVar2.q(0);
            eVar2.s(pointerId);
            eVar2.r(e.b.TouchEnd);
            return CollectionsKt.e(eVar2);
        }
        int pointerId2 = event.getPointerId(event.getActionIndex());
        int findPointerIndex3 = event.findPointerIndex(pointerId2);
        if (findPointerIndex3 == -1) {
            return null;
        }
        this.f29527b.put(Integer.valueOf(pointerId2), new ArrayList(10));
        e eVar3 = new e();
        eVar3.f(this.f29526a.a());
        eVar3.u(event.getX(findPointerIndex3) * recorderConfig.e());
        eVar3.v(event.getY(findPointerIndex3) * recorderConfig.f());
        eVar3.q(0);
        eVar3.s(pointerId2);
        eVar3.r(e.b.TouchStart);
        return CollectionsKt.e(eVar3);
    }
}
