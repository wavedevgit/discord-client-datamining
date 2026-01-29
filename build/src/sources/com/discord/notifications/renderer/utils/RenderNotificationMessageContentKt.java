package com.discord.notifications.renderer.utils;

import android.text.format.DateUtils;
import java.text.DateFormat;
import java.util.Date;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.MatchGroup;
import kotlin.text.MatchResult;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\u001a\u000e\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u0001¨\u0006\u0003"}, d2 = {"renderNotificationMessageContent", "", "content", "notification_renderer_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RenderNotificationMessageContentKt {
    @NotNull
    public static final String renderNotificationMessageContent(@NotNull String content) {
        DateFormat dateTimeInstance;
        CharSequence format;
        Intrinsics.checkNotNullParameter(content, "content");
        Regex regex = new Regex("(```(?:([a-z0-9_+\\-.]+?)\\n)?\\n*([^\\n].*?)\\n*```)");
        Regex regex2 = new Regex("((`+)([\\s\\S]*?[^`])\\2(?!`))");
        Regex regex3 = new Regex("<t:(-?\\d{1,17})(?::([tTdDfFsSR]))?>");
        String j10 = regex2.j(regex.j(content, new Function1() { // from class: com.discord.notifications.renderer.utils.b0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence renderNotificationMessageContent$lambda$0;
                renderNotificationMessageContent$lambda$0 = RenderNotificationMessageContentKt.renderNotificationMessageContent$lambda$0((MatchResult) obj);
                return renderNotificationMessageContent$lambda$0;
            }
        }), new Function1() { // from class: com.discord.notifications.renderer.utils.c0
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence renderNotificationMessageContent$lambda$1;
                renderNotificationMessageContent$lambda$1 = RenderNotificationMessageContentKt.renderNotificationMessageContent$lambda$1((MatchResult) obj);
                return renderNotificationMessageContent$lambda$1;
            }
        });
        while (true) {
            String str = null;
            MatchResult d10 = Regex.d(regex3, j10, 0, 2, null);
            if (d10 == null) {
                return content;
            }
            MatchGroup matchGroup = d10.d().get(1);
            Intrinsics.checkNotNull(matchGroup);
            String a10 = matchGroup.a();
            MatchGroup matchGroup2 = d10.d().get(2);
            if (matchGroup2 != null) {
                str = matchGroup2.a();
            }
            Date date = new Date(Long.parseLong(a10) * 1000);
            if (Intrinsics.areEqual(str, "R")) {
                format = DateUtils.getRelativeTimeSpanString(date.getTime());
            } else {
                if (str != null) {
                    int hashCode = str.hashCode();
                    if (hashCode != 68) {
                        if (hashCode != 70) {
                            if (hashCode != 100) {
                                if (hashCode != 102) {
                                    if (hashCode != 83) {
                                        if (hashCode != 84) {
                                            if (hashCode != 115) {
                                                if (hashCode == 116 && str.equals("t")) {
                                                    dateTimeInstance = DateFormat.getTimeInstance(3);
                                                    format = dateTimeInstance.format(date);
                                                }
                                            } else if (str.equals("s")) {
                                                dateTimeInstance = DateFormat.getDateTimeInstance(3, 3);
                                                format = dateTimeInstance.format(date);
                                            }
                                        } else if (str.equals("T")) {
                                            dateTimeInstance = DateFormat.getTimeInstance(2);
                                            format = dateTimeInstance.format(date);
                                        }
                                    } else if (str.equals("S")) {
                                        dateTimeInstance = DateFormat.getDateTimeInstance(3, 2);
                                        format = dateTimeInstance.format(date);
                                    }
                                } else if (str.equals("f")) {
                                    dateTimeInstance = DateFormat.getDateTimeInstance(1, 3);
                                    format = dateTimeInstance.format(date);
                                }
                            } else if (str.equals("d")) {
                                dateTimeInstance = DateFormat.getDateInstance(3);
                                format = dateTimeInstance.format(date);
                            }
                        } else if (str.equals("F")) {
                            dateTimeInstance = DateFormat.getDateTimeInstance(0, 3);
                            format = dateTimeInstance.format(date);
                        }
                    } else if (str.equals("D")) {
                        dateTimeInstance = DateFormat.getDateInstance(1);
                        format = dateTimeInstance.format(date);
                    }
                }
                dateTimeInstance = DateFormat.getDateTimeInstance(1, 3);
                format = dateTimeInstance.format(date);
            }
            Intrinsics.checkNotNull(format);
            content = StringsKt.G0(content, d10.c().d(), d10.c().e() + 1, format).toString();
            j10 = StringsKt.G0(j10, d10.c().d(), d10.c().e() + 1, format).toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence renderNotificationMessageContent$lambda$0(MatchResult it) {
        Intrinsics.checkNotNullParameter(it, "it");
        MatchGroup matchGroup = it.d().get(1);
        Intrinsics.checkNotNull(matchGroup);
        return StringsKt.F("X", matchGroup.a().length());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence renderNotificationMessageContent$lambda$1(MatchResult it) {
        Intrinsics.checkNotNullParameter(it, "it");
        MatchGroup matchGroup = it.d().get(1);
        Intrinsics.checkNotNull(matchGroup);
        return StringsKt.F("X", matchGroup.a().length());
    }
}
