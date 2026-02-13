package defpackage;

import cv.b;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.text.StringsKt;
/* renamed from: j  reason: default package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class j implements b {

    /* renamed from: a  reason: collision with root package name */
    public static final j f31042a = new j();

    private j() {
    }

    @Override // cv.b
    public Object f(Object obj, Object obj2) {
        if (obj instanceof String) {
            return StringsKt.v1((String) obj).toString();
        }
        if (obj instanceof List) {
            return CollectionsKt.O0((Iterable) obj);
        }
        return null;
    }
}
