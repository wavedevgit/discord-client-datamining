package com.discord.misc.utilities.ids;

import kotlin.Metadata;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000\f\n\u0000\n\u0002\u0010\t\n\u0002\u0010\r\n\u0000\u001a\f\u0010\u0000\u001a\u00020\u0001*\u0004\u0018\u00010\u0002¨\u0006\u0003"}, d2 = {"convertToId", "", "", "misc_utilities_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nIdUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 IdUtils.kt\ncom/discord/misc/utilities/ids/IdUtilsKt\n+ 2 _Strings.kt\nkotlin/text/StringsKt___StringsKt\n*L\n1#1,25:1\n1179#2,2:26\n*S KotlinDebug\n*F\n+ 1 IdUtils.kt\ncom/discord/misc/utilities/ids/IdUtilsKt\n*L\n18#1:26,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class IdUtilsKt {
    public static final long convertToId(CharSequence charSequence) {
        if (charSequence == null) {
            return 0L;
        }
        long j10 = -3750763034362895579L;
        for (int i10 = 0; i10 < charSequence.length(); i10++) {
            j10 = (j10 ^ charSequence.charAt(i10)) * 1099511628211L;
        }
        return j10;
    }
}
