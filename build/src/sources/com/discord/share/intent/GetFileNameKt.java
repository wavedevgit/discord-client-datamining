package com.discord.share.intent;

import android.content.ContentResolver;
import android.database.Cursor;
import android.net.Uri;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.c;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0012\n\u0000\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u0014\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u0004H\u0000¨\u0006\u0005"}, d2 = {"getFileName", "", "Landroid/content/ContentResolver;", "uri", "Landroid/net/Uri;", "share_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class GetFileNameKt {
    @NotNull
    public static final String getFileName(@NotNull ContentResolver contentResolver, @NotNull Uri uri) {
        Object b10;
        String str;
        Intrinsics.checkNotNullParameter(contentResolver, "<this>");
        Intrinsics.checkNotNullParameter(uri, "uri");
        String[] strArr = {"_display_name"};
        try {
            Result.a aVar = Result.f32005e;
            b10 = Result.b(contentResolver.query(uri, strArr, null, null, null));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32005e;
            b10 = Result.b(c.a(th2));
        }
        if (Result.g(b10)) {
            b10 = null;
        }
        Cursor cursor = (Cursor) b10;
        if (cursor == null) {
            return "";
        }
        try {
            if (!cursor.moveToFirst()) {
                str = "";
            } else {
                str = cursor.getString(0);
            }
            bs.c.a(cursor, null);
            if (str == null) {
                return "";
            }
            return str;
        } catch (Throwable th3) {
            try {
                throw th3;
            } catch (Throwable th4) {
                bs.c.a(cursor, th3);
                throw th4;
            }
        }
    }
}
