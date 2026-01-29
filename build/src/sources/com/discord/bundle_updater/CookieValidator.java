package com.discord.bundle_updater;

import java.net.URLDecoder;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;
import okhttp3.Cookie;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0000\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007J\u0018\u0010\b\u001a\u00020\t2\b\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u0006\u0010\n\u001a\u00020\u000b¨\u0006\f"}, d2 = {"Lcom/discord/bundle_updater/CookieValidator;", "", "<init>", "()V", "parseBuildOverrideCookie", "Lcom/discord/bundle_updater/BuildOverrideCookieContents;", "buildOverrideCookie", "Lokhttp3/Cookie;", "validateBuildOverrideCookie", "", "version", "", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCookieValidator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CookieValidator.kt\ncom/discord/bundle_updater/CookieValidator\n+ 2 Json.kt\nkotlinx/serialization/json/JsonKt\n+ 3 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,106:1\n309#2:107\n309#2:119\n490#3,7:108\n465#3:115\n415#3:116\n1252#4,2:117\n1255#4:120\n1761#4,3:121\n*S KotlinDebug\n*F\n+ 1 CookieValidator.kt\ncom/discord/bundle_updater/CookieValidator\n*L\n84#1:107\n87#1:119\n86#1:108,7\n87#1:115\n87#1:116\n87#1:117,2\n87#1:120\n96#1:121,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CookieValidator {
    @NotNull
    public static final CookieValidator INSTANCE = new CookieValidator();

    private CookieValidator() {
    }

    public final BuildOverrideCookieContents parseBuildOverrideCookie(Cookie cookie) {
        String str;
        String M;
        if (cookie == null || (str = (String) CollectionsKt.q0(StringsKt.split$default(cookie.i(), new String[]{"."}, false, 0, 6, null), 1)) == null) {
            return null;
        }
        String decode = URLDecoder.decode(str, "UTF-8");
        ByteString.a aVar = ByteString.f44363o;
        Intrinsics.checkNotNull(decode);
        ByteString d10 = aVar.d(decode);
        if (d10 != null && (M = d10.M()) != null) {
            try {
                Json.a aVar2 = Json.f36394d;
                JsonElement g10 = aVar2.g(M);
                JsonElement jsonElement = (JsonElement) bt.h.n(g10).get("$meta");
                if (jsonElement == null) {
                    return null;
                }
                aVar2.a();
                BuildOverrideCookieMeta buildOverrideCookieMeta = (BuildOverrideCookieMeta) aVar2.d(BuildOverrideCookieMeta.Companion.serializer(), jsonElement);
                JsonObject n10 = bt.h.n(g10);
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                for (Map.Entry<String, JsonElement> entry : n10.entrySet()) {
                    if (!Intrinsics.areEqual(entry.getKey(), "$meta")) {
                        linkedHashMap.put(entry.getKey(), entry.getValue());
                    }
                }
                LinkedHashMap linkedHashMap2 = new LinkedHashMap(o0.e(linkedHashMap.size()));
                for (Map.Entry entry2 : linkedHashMap.entrySet()) {
                    Object key = entry2.getKey();
                    Json.a aVar3 = Json.f36394d;
                    aVar3.a();
                    linkedHashMap2.put(key, (BuildOverrideCookieBuild) aVar3.d(BuildOverrideCookieBuild.Companion.serializer(), (JsonElement) entry2.getValue()));
                }
                return new BuildOverrideCookieContents(buildOverrideCookieMeta, linkedHashMap2);
            } catch (xs.n unused) {
            }
        }
        return null;
    }

    public final boolean validateBuildOverrideCookie(Cookie cookie, @NotNull String version) {
        List<String> allowedVersions;
        Intrinsics.checkNotNullParameter(version, "version");
        BuildOverrideCookieContents parseBuildOverrideCookie = parseBuildOverrideCookie(cookie);
        if (parseBuildOverrideCookie == null || (allowedVersions = parseBuildOverrideCookie.getMeta().getAllowedVersions()) == null) {
            return false;
        }
        List<String> list = allowedVersions;
        if ((list instanceof Collection) && list.isEmpty()) {
            return false;
        }
        for (String str : list) {
            if (Intrinsics.areEqual(str, version)) {
                return true;
            }
        }
        return false;
    }
}
