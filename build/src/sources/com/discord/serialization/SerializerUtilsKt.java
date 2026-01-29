package com.discord.serialization;

import bs.b;
import bt.h;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.reflect.KProperty1;
import kotlinx.serialization.json.JsonElement;
import xs.n;
@Metadata(d1 = {"\u0000\u0014\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a \u0010\u0000\u001a\u00020\u00012\u000e\u0010\u0002\u001a\n\u0012\u0002\b\u0003\u0012\u0002\b\u00030\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0002¨\u0006\u0006"}, d2 = {"parseProperty", "", "property", "Lkotlin/reflect/KProperty1;", "jsonProperty", "Lkotlinx/serialization/json/JsonElement;", "serialization_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SerializerUtilsKt {
    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean parseProperty(KProperty1 kProperty1, JsonElement jsonElement) {
        try {
            KClass b10 = b.b(kProperty1.getReturnType());
            if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(String.class))) {
                h.o(jsonElement).b();
            } else if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(Integer.TYPE))) {
                h.k(h.o(jsonElement));
            } else if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(Double.TYPE))) {
                h.i(h.o(jsonElement));
            } else if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(Boolean.TYPE))) {
                h.f(h.o(jsonElement));
            } else if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(Long.TYPE))) {
                h.q(h.o(jsonElement));
            } else if (Intrinsics.areEqual(b10, Reflection.getOrCreateKotlinClass(Float.TYPE))) {
                h.j(h.o(jsonElement));
            }
            return true;
        } catch (n | IllegalArgumentException unused) {
            return false;
        }
    }
}
