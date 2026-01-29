package com.discord.foreground_service.react;

import com.discord.foreground_service.service.ServiceNotificationConfiguration;
import com.discord.react.utilities.NativeArrayExtensionsKt;
import com.discord.react.utilities.NativeMapExtensionsKt;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.ranges.IntRange;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00006\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u001a\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001*\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0000\u001a\u0014\u0010\u0006\u001a\u00020\u0002*\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH\u0000\u001a\u0014\u0010\t\u001a\u00020\n*\u00020\u00032\u0006\u0010\u0007\u001a\u00020\bH\u0002\u001a\u0014\u0010\u000b\u001a\u00020\f*\u00020\u00032\u0006\u0010\r\u001a\u00020\u000eH\u0002\u001a\u0014\u0010\u000f\u001a\u00020\u0010*\u00020\u00032\u0006\u0010\r\u001a\u00020\u000eH\u0002¨\u0006\u0011"}, d2 = {"parseList", "", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration;", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Companion;", "readableArray", "Lcom/facebook/react/bridge/ReadableArray;", "parse", "readableMap", "Lcom/facebook/react/bridge/ReadableMap;", "parseAction", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Action;", "parsePriority", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Priority;", "value", "", "parseType", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Type;", "foreground_service_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nForegroudServiceConfigurationParser.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ForegroudServiceConfigurationParser.kt\ncom/discord/foreground_service/react/ForegroudServiceConfigurationParserKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,61:1\n1563#2:62\n1634#2,3:63\n1563#2:67\n1634#2,3:68\n1#3:66\n*S KotlinDebug\n*F\n+ 1 ForegroudServiceConfigurationParser.kt\ncom/discord/foreground_service/react/ForegroudServiceConfigurationParserKt\n*L\n12#1:62\n12#1:63,3\n29#1:67\n29#1:68,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ForegroudServiceConfigurationParserKt {
    @NotNull
    public static final ServiceNotificationConfiguration parse(@NotNull ServiceNotificationConfiguration.Companion companion, @NotNull ReadableMap readableMap) {
        ServiceNotificationConfiguration.Action action;
        List l10;
        Intrinsics.checkNotNullParameter(companion, "<this>");
        Intrinsics.checkNotNullParameter(readableMap, "readableMap");
        String nonNullString = NativeMapExtensionsKt.getNonNullString(readableMap, "title");
        String string = readableMap.getString("content");
        ServiceNotificationConfiguration.Companion companion2 = ServiceNotificationConfiguration.Companion;
        ServiceNotificationConfiguration.Priority parsePriority = parsePriority(companion2, readableMap.getInt("priority"));
        ReadableMap map = readableMap.getMap("contentAction");
        if (map != null) {
            action = parseAction(companion2, map);
        } else {
            action = null;
        }
        ServiceNotificationConfiguration.Action action2 = action;
        ReadableArray array = readableMap.getArray("auxiliaryActions");
        if (array != null) {
            IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(array);
            l10 = new ArrayList(CollectionsKt.w(sizeRange, 10));
            Iterator it = sizeRange.iterator();
            while (it.hasNext()) {
                ReadableMap map2 = array.getMap(((m0) it).nextInt());
                Intrinsics.checkNotNull(map2);
                l10.add(parseAction(ServiceNotificationConfiguration.Companion, map2));
            }
        } else {
            l10 = CollectionsKt.l();
        }
        return new ServiceNotificationConfiguration(nonNullString, string, parsePriority, action2, l10, parseType(ServiceNotificationConfiguration.Companion, readableMap.getInt("type")));
    }

    private static final ServiceNotificationConfiguration.Action parseAction(ServiceNotificationConfiguration.Companion companion, ReadableMap readableMap) {
        Map<String, String> i10;
        String nonNullString = NativeMapExtensionsKt.getNonNullString(readableMap, "tag");
        String nonNullString2 = NativeMapExtensionsKt.getNonNullString(readableMap, "taskName");
        String stringOrEmpty = NativeMapExtensionsKt.getStringOrEmpty(readableMap, "title");
        ReadableMap map = readableMap.getMap("data");
        if (map == null || (i10 = NativeMapExtensionsKt.toStringMap(map)) == null) {
            i10 = o0.i();
        }
        return new ServiceNotificationConfiguration.Action(nonNullString, nonNullString2, stringOrEmpty, i10);
    }

    @NotNull
    public static final List<ServiceNotificationConfiguration> parseList(@NotNull ServiceNotificationConfiguration.Companion companion, @NotNull ReadableArray readableArray) {
        Intrinsics.checkNotNullParameter(companion, "<this>");
        Intrinsics.checkNotNullParameter(readableArray, "readableArray");
        IntRange sizeRange = NativeArrayExtensionsKt.sizeRange(readableArray);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(sizeRange, 10));
        Iterator it = sizeRange.iterator();
        while (it.hasNext()) {
            int nextInt = ((m0) it).nextInt();
            ServiceNotificationConfiguration.Companion companion2 = ServiceNotificationConfiguration.Companion;
            ReadableMap map = readableArray.getMap(nextInt);
            Intrinsics.checkNotNull(map);
            arrayList.add(parse(companion2, map));
        }
        return arrayList;
    }

    private static final ServiceNotificationConfiguration.Priority parsePriority(ServiceNotificationConfiguration.Companion companion, int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return ServiceNotificationConfiguration.Priority.LOW;
                }
                throw new IllegalArgumentException("Unknown priority: " + i10 + ".");
            }
            return ServiceNotificationConfiguration.Priority.MEDIUM;
        }
        return ServiceNotificationConfiguration.Priority.HIGH;
    }

    private static final ServiceNotificationConfiguration.Type parseType(ServiceNotificationConfiguration.Companion companion, int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 == 2) {
                    return ServiceNotificationConfiguration.Type.SCREEN_SHARE;
                }
                throw new IllegalArgumentException("Unknown type: " + i10 + ".");
            }
            return ServiceNotificationConfiguration.Type.VOICE_CALL;
        }
        return ServiceNotificationConfiguration.Type.FILE_UPLOAD;
    }
}
