package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final a f34080d = new a();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean d10;
        d10 = AbstractAnnotationTypeQualifierResolver.d(obj);
        return Boolean.valueOf(d10);
    }
}
