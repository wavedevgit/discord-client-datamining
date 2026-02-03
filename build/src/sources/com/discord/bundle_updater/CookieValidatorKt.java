package com.discord.bundle_updater;

import android.webkit.CookieManager;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import okhttp3.Cookie;
import okhttp3.HttpUrl;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0016\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u001a\u0018\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001*\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005¨\u0006\u0006"}, d2 = {"getCookiesForUrl", "", "Lokhttp3/Cookie;", "Landroid/webkit/CookieManager;", "url", "", "bundle_updater_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCookieValidator.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CookieValidator.kt\ncom/discord/bundle_updater/CookieValidatorKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,106:1\n1617#2,9:107\n1869#2:116\n1870#2:118\n1626#2:119\n1#3:117\n*S KotlinDebug\n*F\n+ 1 CookieValidator.kt\ncom/discord/bundle_updater/CookieValidatorKt\n*L\n102#1:107,9\n102#1:116\n102#1:118\n102#1:119\n102#1:117\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CookieValidatorKt {
    @NotNull
    public static final List<Cookie> getCookiesForUrl(@NotNull CookieManager cookieManager, @NotNull String url) {
        Intrinsics.checkNotNullParameter(cookieManager, "<this>");
        Intrinsics.checkNotNullParameter(url, "url");
        String cookie = cookieManager.getCookie(url);
        if (cookie == null) {
            return CollectionsKt.l();
        }
        ArrayList arrayList = new ArrayList();
        for (String str : StringsKt.split$default(cookie, new String[]{"; "}, false, 0, 6, null)) {
            Cookie c10 = Cookie.f44156j.c(HttpUrl.f44192k.d(url), str);
            if (c10 != null) {
                arrayList.add(c10);
            }
        }
        return arrayList;
    }
}
