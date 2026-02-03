package com.discord.theme;

import android.content.res.Resources;
import com.discord.theme.LightTheme;
import com.discord.theme.utils.ColorUtilsKt;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import lr.l;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000!\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0003\b\u009c\u0002\b\u0000\u0018\u00002\u00020\u0001B\u001b\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\u0010\u0004\u001a\u00060\u0005R\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\t2\u0006\u0010\u000b\u001a\u00020\tH\u0016J\u0018\u0010\f\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\tH\u0016R\u001b\u0010\u000f\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0012\u0010\u0013\u001a\u0004\b\u0010\u0010\u0011R\u001b\u0010\u0014\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0016\u0010\u0013\u001a\u0004\b\u0015\u0010\u0011R\u001b\u0010\u0017\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u0019\u0010\u0013\u001a\u0004\b\u0018\u0010\u0011R\u001b\u0010\u001a\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001c\u0010\u0013\u001a\u0004\b\u001b\u0010\u0011R\u001b\u0010\u001d\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u001f\u0010\u0013\u001a\u0004\b\u001e\u0010\u0011R\u001b\u0010 \u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\"\u0010\u0013\u001a\u0004\b!\u0010\u0011R\u001b\u0010#\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b%\u0010\u0013\u001a\u0004\b$\u0010\u0011R\u001b\u0010&\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b(\u0010\u0013\u001a\u0004\b'\u0010\u0011R\u001b\u0010)\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b+\u0010\u0013\u001a\u0004\b*\u0010\u0011R\u001b\u0010,\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b.\u0010\u0013\u001a\u0004\b-\u0010\u0011R\u001b\u0010/\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b1\u0010\u0013\u001a\u0004\b0\u0010\u0011R\u001b\u00102\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b4\u0010\u0013\u001a\u0004\b3\u0010\u0011R\u001b\u00105\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b7\u0010\u0013\u001a\u0004\b6\u0010\u0011R\u001b\u00108\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b:\u0010\u0013\u001a\u0004\b9\u0010\u0011R\u001b\u0010;\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b=\u0010\u0013\u001a\u0004\b<\u0010\u0011R\u001b\u0010>\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b@\u0010\u0013\u001a\u0004\b?\u0010\u0011R\u001b\u0010A\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bC\u0010\u0013\u001a\u0004\bB\u0010\u0011R\u001b\u0010D\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bF\u0010\u0013\u001a\u0004\bE\u0010\u0011R\u001b\u0010G\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bI\u0010\u0013\u001a\u0004\bH\u0010\u0011R\u001b\u0010J\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bL\u0010\u0013\u001a\u0004\bK\u0010\u0011R\u001b\u0010M\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bO\u0010\u0013\u001a\u0004\bN\u0010\u0011R\u001b\u0010P\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bR\u0010\u0013\u001a\u0004\bQ\u0010\u0011R\u001b\u0010S\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bU\u0010\u0013\u001a\u0004\bT\u0010\u0011R\u001b\u0010V\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bX\u0010\u0013\u001a\u0004\bW\u0010\u0011R\u001b\u0010Y\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b[\u0010\u0013\u001a\u0004\bZ\u0010\u0011R\u001b\u0010\\\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b^\u0010\u0013\u001a\u0004\b]\u0010\u0011R\u001b\u0010_\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\ba\u0010\u0013\u001a\u0004\b`\u0010\u0011R\u001b\u0010b\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bd\u0010\u0013\u001a\u0004\bc\u0010\u0011R\u001b\u0010e\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bg\u0010\u0013\u001a\u0004\bf\u0010\u0011R\u001b\u0010h\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bj\u0010\u0013\u001a\u0004\bi\u0010\u0011R\u001b\u0010k\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bm\u0010\u0013\u001a\u0004\bl\u0010\u0011R\u001b\u0010n\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bp\u0010\u0013\u001a\u0004\bo\u0010\u0011R\u001b\u0010q\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bs\u0010\u0013\u001a\u0004\br\u0010\u0011R\u001b\u0010t\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\bv\u0010\u0013\u001a\u0004\bu\u0010\u0011R\u001b\u0010w\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\by\u0010\u0013\u001a\u0004\bx\u0010\u0011R\u001b\u0010z\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b|\u0010\u0013\u001a\u0004\b{\u0010\u0011R\u001b\u0010}\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\f\n\u0004\b\u007f\u0010\u0013\u001a\u0004\b~\u0010\u0011R\u001e\u0010\u0080\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0082\u0001\u0010\u0013\u001a\u0005\b\u0081\u0001\u0010\u0011R\u001e\u0010\u0083\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0085\u0001\u0010\u0013\u001a\u0005\b\u0084\u0001\u0010\u0011R\u001e\u0010\u0086\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0088\u0001\u0010\u0013\u001a\u0005\b\u0087\u0001\u0010\u0011R\u001e\u0010\u0089\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008b\u0001\u0010\u0013\u001a\u0005\b\u008a\u0001\u0010\u0011R\u001e\u0010\u008c\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008e\u0001\u0010\u0013\u001a\u0005\b\u008d\u0001\u0010\u0011R\u001e\u0010\u008f\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0091\u0001\u0010\u0013\u001a\u0005\b\u0090\u0001\u0010\u0011R\u001e\u0010\u0092\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0094\u0001\u0010\u0013\u001a\u0005\b\u0093\u0001\u0010\u0011R\u001e\u0010\u0095\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0097\u0001\u0010\u0013\u001a\u0005\b\u0096\u0001\u0010\u0011R\u001e\u0010\u0098\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009a\u0001\u0010\u0013\u001a\u0005\b\u0099\u0001\u0010\u0011R\u001e\u0010\u009b\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009d\u0001\u0010\u0013\u001a\u0005\b\u009c\u0001\u0010\u0011R\u001e\u0010\u009e\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b \u0001\u0010\u0013\u001a\u0005\b\u009f\u0001\u0010\u0011R\u001e\u0010¡\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b£\u0001\u0010\u0013\u001a\u0005\b¢\u0001\u0010\u0011R\u001e\u0010¤\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¦\u0001\u0010\u0013\u001a\u0005\b¥\u0001\u0010\u0011R\u001e\u0010§\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b©\u0001\u0010\u0013\u001a\u0005\b¨\u0001\u0010\u0011R\u001e\u0010ª\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¬\u0001\u0010\u0013\u001a\u0005\b«\u0001\u0010\u0011R\u001e\u0010\u00ad\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¯\u0001\u0010\u0013\u001a\u0005\b®\u0001\u0010\u0011R\u001e\u0010°\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b²\u0001\u0010\u0013\u001a\u0005\b±\u0001\u0010\u0011R\u001e\u0010³\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bµ\u0001\u0010\u0013\u001a\u0005\b´\u0001\u0010\u0011R\u001e\u0010¶\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¸\u0001\u0010\u0013\u001a\u0005\b·\u0001\u0010\u0011R\u001e\u0010¹\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b»\u0001\u0010\u0013\u001a\u0005\bº\u0001\u0010\u0011R\u001e\u0010¼\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¾\u0001\u0010\u0013\u001a\u0005\b½\u0001\u0010\u0011R\u001e\u0010¿\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÁ\u0001\u0010\u0013\u001a\u0005\bÀ\u0001\u0010\u0011R\u001e\u0010Â\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÄ\u0001\u0010\u0013\u001a\u0005\bÃ\u0001\u0010\u0011R\u001e\u0010Å\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÇ\u0001\u0010\u0013\u001a\u0005\bÆ\u0001\u0010\u0011R\u001e\u0010È\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÊ\u0001\u0010\u0013\u001a\u0005\bÉ\u0001\u0010\u0011R\u001e\u0010Ë\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÍ\u0001\u0010\u0013\u001a\u0005\bÌ\u0001\u0010\u0011R\u001e\u0010Î\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÐ\u0001\u0010\u0013\u001a\u0005\bÏ\u0001\u0010\u0011R\u001e\u0010Ñ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÓ\u0001\u0010\u0013\u001a\u0005\bÒ\u0001\u0010\u0011R\u001e\u0010Ô\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÖ\u0001\u0010\u0013\u001a\u0005\bÕ\u0001\u0010\u0011R\u001e\u0010×\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÙ\u0001\u0010\u0013\u001a\u0005\bØ\u0001\u0010\u0011R\u001e\u0010Ú\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bÜ\u0001\u0010\u0013\u001a\u0005\bÛ\u0001\u0010\u0011R\u001e\u0010Ý\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bß\u0001\u0010\u0013\u001a\u0005\bÞ\u0001\u0010\u0011R\u001e\u0010à\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bâ\u0001\u0010\u0013\u001a\u0005\bá\u0001\u0010\u0011R\u001e\u0010ã\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bå\u0001\u0010\u0013\u001a\u0005\bä\u0001\u0010\u0011R\u001e\u0010æ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bè\u0001\u0010\u0013\u001a\u0005\bç\u0001\u0010\u0011R\u001e\u0010é\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bë\u0001\u0010\u0013\u001a\u0005\bê\u0001\u0010\u0011R\u001e\u0010ì\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bî\u0001\u0010\u0013\u001a\u0005\bí\u0001\u0010\u0011R\u001e\u0010ï\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bñ\u0001\u0010\u0013\u001a\u0005\bð\u0001\u0010\u0011R\u001e\u0010ò\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bô\u0001\u0010\u0013\u001a\u0005\bó\u0001\u0010\u0011R\u001e\u0010õ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b÷\u0001\u0010\u0013\u001a\u0005\bö\u0001\u0010\u0011R\u001e\u0010ø\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bú\u0001\u0010\u0013\u001a\u0005\bù\u0001\u0010\u0011R\u001e\u0010û\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\bý\u0001\u0010\u0013\u001a\u0005\bü\u0001\u0010\u0011R\u001e\u0010þ\u0001\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0080\u0002\u0010\u0013\u001a\u0005\bÿ\u0001\u0010\u0011R\u001e\u0010\u0081\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0083\u0002\u0010\u0013\u001a\u0005\b\u0082\u0002\u0010\u0011R\u001e\u0010\u0084\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0086\u0002\u0010\u0013\u001a\u0005\b\u0085\u0002\u0010\u0011R\u001e\u0010\u0087\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0089\u0002\u0010\u0013\u001a\u0005\b\u0088\u0002\u0010\u0011R\u001e\u0010\u008a\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008c\u0002\u0010\u0013\u001a\u0005\b\u008b\u0002\u0010\u0011R\u001e\u0010\u008d\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u008f\u0002\u0010\u0013\u001a\u0005\b\u008e\u0002\u0010\u0011R\u001e\u0010\u0090\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0092\u0002\u0010\u0013\u001a\u0005\b\u0091\u0002\u0010\u0011R\u001e\u0010\u0093\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0095\u0002\u0010\u0013\u001a\u0005\b\u0094\u0002\u0010\u0011R\u001e\u0010\u0096\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u0098\u0002\u0010\u0013\u001a\u0005\b\u0097\u0002\u0010\u0011R\u001e\u0010\u0099\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009b\u0002\u0010\u0013\u001a\u0005\b\u009a\u0002\u0010\u0011R\u001e\u0010\u009c\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b\u009e\u0002\u0010\u0013\u001a\u0005\b\u009d\u0002\u0010\u0011R\u001e\u0010\u009f\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¡\u0002\u0010\u0013\u001a\u0005\b \u0002\u0010\u0011R\u001e\u0010¢\u0002\u001a\u00020\t8VX\u0096\u0084\u0002¢\u0006\u000e\n\u0005\b¤\u0002\u0010\u0013\u001a\u0005\b£\u0002\u0010\u0011¨\u0006¥\u0002"}, d2 = {"Lcom/discord/theme/LightTheme;", "Lcom/discord/theme/DiscordThemeObject;", "resources", "Landroid/content/res/Resources;", "theme", "Landroid/content/res/Resources$Theme;", "<init>", "(Landroid/content/res/Resources;Landroid/content/res/Resources$Theme;)V", "getColorRes", "", "lightColorRes", "darkColorRes", "getColor", "lightColor", "darkColor", "backgroundAccent", "getBackgroundAccent", "()I", "backgroundAccent$delegate", "Lkotlin/Lazy;", "backgroundBaseLow", "getBackgroundBaseLow", "backgroundBaseLow$delegate", "backgroundBaseLower", "getBackgroundBaseLower", "backgroundBaseLower$delegate", "backgroundBaseLowest", "getBackgroundBaseLowest", "backgroundBaseLowest$delegate", "backgroundFeedbackCritical", "getBackgroundFeedbackCritical", "backgroundFeedbackCritical$delegate", "backgroundFeedbackNotification", "getBackgroundFeedbackNotification", "backgroundFeedbackNotification$delegate", "backgroundModMuted", "getBackgroundModMuted", "backgroundModMuted$delegate", "backgroundModNormal", "getBackgroundModNormal", "backgroundModNormal$delegate", "backgroundModStrong", "getBackgroundModStrong", "backgroundModStrong$delegate", "backgroundModSubtle", "getBackgroundModSubtle", "backgroundModSubtle$delegate", "backgroundScrim", "getBackgroundScrim", "backgroundScrim$delegate", "backgroundScrimLightbox", "getBackgroundScrimLightbox", "backgroundScrimLightbox$delegate", "backgroundSecondaryAlt", "getBackgroundSecondaryAlt", "backgroundSecondaryAlt$delegate", "backgroundSurfaceHigh", "getBackgroundSurfaceHigh", "backgroundSurfaceHigh$delegate", "backgroundSurfaceHighest", "getBackgroundSurfaceHighest", "backgroundSurfaceHighest$delegate", "badgeBackgroundBrand", "getBadgeBackgroundBrand", "badgeBackgroundBrand$delegate", "badgeBackgroundDefault", "getBadgeBackgroundDefault", "badgeBackgroundDefault$delegate", "badgeNotificationBackground", "getBadgeNotificationBackground", "badgeNotificationBackground$delegate", "badgeTextDefault", "getBadgeTextDefault", "badgeTextDefault$delegate", "bgSurfaceRaised", "getBgSurfaceRaised", "bgSurfaceRaised$delegate", "borderStrong", "getBorderStrong", "borderStrong$delegate", "borderSubtle", "getBorderSubtle", "borderSubtle$delegate", "cardBackgroundDefault", "getCardBackgroundDefault", "cardBackgroundDefault$delegate", "chatSwipeToReplyBackground", "getChatSwipeToReplyBackground", "chatSwipeToReplyBackground$delegate", "chatSwipeToReplyGradientBackground", "getChatSwipeToReplyGradientBackground", "chatSwipeToReplyGradientBackground$delegate", "controlConnectedBackgroundActive", "getControlConnectedBackgroundActive", "controlConnectedBackgroundActive$delegate", "controlConnectedBackgroundDefault", "getControlConnectedBackgroundDefault", "controlConnectedBackgroundDefault$delegate", "controlConnectedBorderDefault", "getControlConnectedBorderDefault", "controlConnectedBorderDefault$delegate", "controlConnectedTextDefault", "getControlConnectedTextDefault", "controlConnectedTextDefault$delegate", "controlCriticalPrimaryBackgroundActive", "getControlCriticalPrimaryBackgroundActive", "controlCriticalPrimaryBackgroundActive$delegate", "controlCriticalPrimaryBackgroundDefault", "getControlCriticalPrimaryBackgroundDefault", "controlCriticalPrimaryBackgroundDefault$delegate", "controlCriticalPrimaryBorderDefault", "getControlCriticalPrimaryBorderDefault", "controlCriticalPrimaryBorderDefault$delegate", "controlCriticalPrimaryTextDefault", "getControlCriticalPrimaryTextDefault", "controlCriticalPrimaryTextDefault$delegate", "controlOverlayPrimaryBackgroundActive", "getControlOverlayPrimaryBackgroundActive", "controlOverlayPrimaryBackgroundActive$delegate", "controlOverlayPrimaryBackgroundDefault", "getControlOverlayPrimaryBackgroundDefault", "controlOverlayPrimaryBackgroundDefault$delegate", "controlOverlayPrimaryBorderDefault", "getControlOverlayPrimaryBorderDefault", "controlOverlayPrimaryBorderDefault$delegate", "controlOverlayPrimaryTextDefault", "getControlOverlayPrimaryTextDefault", "controlOverlayPrimaryTextDefault$delegate", "controlOverlaySecondaryBackgroundActive", "getControlOverlaySecondaryBackgroundActive", "controlOverlaySecondaryBackgroundActive$delegate", "controlOverlaySecondaryBackgroundDefault", "getControlOverlaySecondaryBackgroundDefault", "controlOverlaySecondaryBackgroundDefault$delegate", "controlOverlaySecondaryBorderDefault", "getControlOverlaySecondaryBorderDefault", "controlOverlaySecondaryBorderDefault$delegate", "controlOverlaySecondaryTextDefault", "getControlOverlaySecondaryTextDefault", "controlOverlaySecondaryTextDefault$delegate", "controlPrimaryBackgroundActive", "getControlPrimaryBackgroundActive", "controlPrimaryBackgroundActive$delegate", "controlPrimaryBackgroundDefault", "getControlPrimaryBackgroundDefault", "controlPrimaryBackgroundDefault$delegate", "controlPrimaryBorderDefault", "getControlPrimaryBorderDefault", "controlPrimaryBorderDefault$delegate", "controlPrimaryTextDefault", "getControlPrimaryTextDefault", "controlPrimaryTextDefault$delegate", "controlSecondaryBackgroundActive", "getControlSecondaryBackgroundActive", "controlSecondaryBackgroundActive$delegate", "controlSecondaryBackgroundDefault", "getControlSecondaryBackgroundDefault", "controlSecondaryBackgroundDefault$delegate", "controlSecondaryBorderActive", "getControlSecondaryBorderActive", "controlSecondaryBorderActive$delegate", "controlSecondaryBorderDefault", "getControlSecondaryBorderDefault", "controlSecondaryBorderDefault$delegate", "controlSecondaryTextDefault", "getControlSecondaryTextDefault", "controlSecondaryTextDefault$delegate", "embedBackground", "getEmbedBackground", "embedBackground$delegate", "iconFeedbackCritical", "getIconFeedbackCritical", "iconFeedbackCritical$delegate", "iconFeedbackInfo", "getIconFeedbackInfo", "iconFeedbackInfo$delegate", "iconFeedbackNotification", "getIconFeedbackNotification", "iconFeedbackNotification$delegate", "iconFeedbackPositive", "getIconFeedbackPositive", "iconFeedbackPositive$delegate", "iconFeedbackWarning", "getIconFeedbackWarning", "iconFeedbackWarning$delegate", "inputBackgroundDefault", "getInputBackgroundDefault", "inputBackgroundDefault$delegate", "inputBorderDefault", "getInputBorderDefault", "inputBorderDefault$delegate", "interactiveBackgroundSelected", "getInteractiveBackgroundSelected", "interactiveBackgroundSelected$delegate", "interactiveIconActive", "getInteractiveIconActive", "interactiveIconActive$delegate", "interactiveIconDefault", "getInteractiveIconDefault", "interactiveIconDefault$delegate", "interactiveMuted", "getInteractiveMuted", "interactiveMuted$delegate", "interactiveTextActive", "getInteractiveTextActive", "interactiveTextActive$delegate", "interactiveTextDefault", "getInteractiveTextDefault", "interactiveTextDefault$delegate", "messageHighlightBackgroundDefault", "getMessageHighlightBackgroundDefault", "messageHighlightBackgroundDefault$delegate", "mobileAndroidButtonBackgroundRipple", "getMobileAndroidButtonBackgroundRipple", "mobileAndroidButtonBackgroundRipple$delegate", "mobileLegacyButtonSecondaryBackgroundDefault", "getMobileLegacyButtonSecondaryBackgroundDefault", "mobileLegacyButtonSecondaryBackgroundDefault$delegate", "mobileLegacyButtonSecondaryBorderDefault", "getMobileLegacyButtonSecondaryBorderDefault", "mobileLegacyButtonSecondaryBorderDefault$delegate", "mobileLegacyButtonSecondaryTextDefault", "getMobileLegacyButtonSecondaryTextDefault", "mobileLegacyButtonSecondaryTextDefault$delegate", "mobileTextHeadingPrimary", "getMobileTextHeadingPrimary", "mobileTextHeadingPrimary$delegate", "progressbarIndicatorBackground", "getProgressbarIndicatorBackground", "progressbarIndicatorBackground$delegate", "progressbarTrackBackground", "getProgressbarTrackBackground", "progressbarTrackBackground$delegate", "redesignButtonTertiaryBackground", "getRedesignButtonTertiaryBackground", "redesignButtonTertiaryBackground$delegate", "redesignButtonTertiaryText", "getRedesignButtonTertiaryText", "redesignButtonTertiaryText$delegate", "spineDefault", "getSpineDefault", "spineDefault$delegate", "spoilerHiddenBackground", "getSpoilerHiddenBackground", "spoilerHiddenBackground$delegate", "spoilerRevealedBackground", "getSpoilerRevealedBackground", "spoilerRevealedBackground$delegate", "statusDanger", "getStatusDanger", "statusDanger$delegate", "statusPositive", "getStatusPositive", "statusPositive$delegate", "statusPositiveText", "getStatusPositiveText", "statusPositiveText$delegate", "statusWarning", "getStatusWarning", "statusWarning$delegate", "textBrand", "getTextBrand", "textBrand$delegate", "textDefault", "getTextDefault", "textDefault$delegate", "textFeedbackCritical", "getTextFeedbackCritical", "textFeedbackCritical$delegate", "textFeedbackInfo", "getTextFeedbackInfo", "textFeedbackInfo$delegate", "textFeedbackPositive", "getTextFeedbackPositive", "textFeedbackPositive$delegate", "textFeedbackWarning", "getTextFeedbackWarning", "textFeedbackWarning$delegate", "textLink", "getTextLink", "textLink$delegate", "textMuted", "getTextMuted", "textMuted$delegate", "textStrong", "getTextStrong", "textStrong$delegate", "textSubtle", "getTextSubtle", "textSubtle$delegate", "white", "getWhite", "white$delegate", "theme_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class LightTheme extends DiscordThemeObject {
    @NotNull
    private final Lazy backgroundAccent$delegate;
    @NotNull
    private final Lazy backgroundBaseLow$delegate;
    @NotNull
    private final Lazy backgroundBaseLower$delegate;
    @NotNull
    private final Lazy backgroundBaseLowest$delegate;
    @NotNull
    private final Lazy backgroundFeedbackCritical$delegate;
    @NotNull
    private final Lazy backgroundFeedbackNotification$delegate;
    @NotNull
    private final Lazy backgroundModMuted$delegate;
    @NotNull
    private final Lazy backgroundModNormal$delegate;
    @NotNull
    private final Lazy backgroundModStrong$delegate;
    @NotNull
    private final Lazy backgroundModSubtle$delegate;
    @NotNull
    private final Lazy backgroundScrim$delegate;
    @NotNull
    private final Lazy backgroundScrimLightbox$delegate;
    @NotNull
    private final Lazy backgroundSecondaryAlt$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHigh$delegate;
    @NotNull
    private final Lazy backgroundSurfaceHighest$delegate;
    @NotNull
    private final Lazy badgeBackgroundBrand$delegate;
    @NotNull
    private final Lazy badgeBackgroundDefault$delegate;
    @NotNull
    private final Lazy badgeNotificationBackground$delegate;
    @NotNull
    private final Lazy badgeTextDefault$delegate;
    @NotNull
    private final Lazy bgSurfaceRaised$delegate;
    @NotNull
    private final Lazy borderStrong$delegate;
    @NotNull
    private final Lazy borderSubtle$delegate;
    @NotNull
    private final Lazy cardBackgroundDefault$delegate;
    @NotNull
    private final Lazy chatSwipeToReplyBackground$delegate;
    @NotNull
    private final Lazy chatSwipeToReplyGradientBackground$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundActive$delegate;
    @NotNull
    private final Lazy controlConnectedBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlConnectedBorderDefault$delegate;
    @NotNull
    private final Lazy controlConnectedTextDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlCriticalPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlayPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlOverlaySecondaryTextDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlPrimaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlPrimaryTextDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderActive$delegate;
    @NotNull
    private final Lazy controlSecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy controlSecondaryTextDefault$delegate;
    @NotNull
    private final Lazy embedBackground$delegate;
    @NotNull
    private final Lazy iconFeedbackCritical$delegate;
    @NotNull
    private final Lazy iconFeedbackInfo$delegate;
    @NotNull
    private final Lazy iconFeedbackNotification$delegate;
    @NotNull
    private final Lazy iconFeedbackPositive$delegate;
    @NotNull
    private final Lazy iconFeedbackWarning$delegate;
    @NotNull
    private final Lazy inputBackgroundDefault$delegate;
    @NotNull
    private final Lazy inputBorderDefault$delegate;
    @NotNull
    private final Lazy interactiveBackgroundSelected$delegate;
    @NotNull
    private final Lazy interactiveIconActive$delegate;
    @NotNull
    private final Lazy interactiveIconDefault$delegate;
    @NotNull
    private final Lazy interactiveMuted$delegate;
    @NotNull
    private final Lazy interactiveTextActive$delegate;
    @NotNull
    private final Lazy interactiveTextDefault$delegate;
    @NotNull
    private final Lazy messageHighlightBackgroundDefault$delegate;
    @NotNull
    private final Lazy mobileAndroidButtonBackgroundRipple$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryBackgroundDefault$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryBorderDefault$delegate;
    @NotNull
    private final Lazy mobileLegacyButtonSecondaryTextDefault$delegate;
    @NotNull
    private final Lazy mobileTextHeadingPrimary$delegate;
    @NotNull
    private final Lazy progressbarIndicatorBackground$delegate;
    @NotNull
    private final Lazy progressbarTrackBackground$delegate;
    @NotNull
    private final Lazy redesignButtonTertiaryBackground$delegate;
    @NotNull
    private final Lazy redesignButtonTertiaryText$delegate;
    @NotNull
    private final Lazy spineDefault$delegate;
    @NotNull
    private final Lazy spoilerHiddenBackground$delegate;
    @NotNull
    private final Lazy spoilerRevealedBackground$delegate;
    @NotNull
    private final Lazy statusDanger$delegate;
    @NotNull
    private final Lazy statusPositive$delegate;
    @NotNull
    private final Lazy statusPositiveText$delegate;
    @NotNull
    private final Lazy statusWarning$delegate;
    @NotNull
    private final Lazy textBrand$delegate;
    @NotNull
    private final Lazy textDefault$delegate;
    @NotNull
    private final Lazy textFeedbackCritical$delegate;
    @NotNull
    private final Lazy textFeedbackInfo$delegate;
    @NotNull
    private final Lazy textFeedbackPositive$delegate;
    @NotNull
    private final Lazy textFeedbackWarning$delegate;
    @NotNull
    private final Lazy textLink$delegate;
    @NotNull
    private final Lazy textMuted$delegate;
    @NotNull
    private final Lazy textStrong$delegate;
    @NotNull
    private final Lazy textSubtle$delegate;
    @NotNull
    private final Lazy white$delegate;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public LightTheme(@NotNull final Resources resources, @NotNull final Resources.Theme theme) {
        super(null);
        Intrinsics.checkNotNullParameter(resources, "resources");
        Intrinsics.checkNotNullParameter(theme, "theme");
        this.backgroundAccent$delegate = l.a(new Function0() { // from class: g8.c6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundAccent_delegate$lambda$0;
                backgroundAccent_delegate$lambda$0 = LightTheme.backgroundAccent_delegate$lambda$0(resources, theme);
                return Integer.valueOf(backgroundAccent_delegate$lambda$0);
            }
        });
        this.backgroundBaseLow$delegate = l.a(new Function0() { // from class: g8.e6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLow_delegate$lambda$1;
                backgroundBaseLow_delegate$lambda$1 = LightTheme.backgroundBaseLow_delegate$lambda$1(resources, theme);
                return Integer.valueOf(backgroundBaseLow_delegate$lambda$1);
            }
        });
        this.backgroundBaseLower$delegate = l.a(new Function0() { // from class: g8.q6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLower_delegate$lambda$2;
                backgroundBaseLower_delegate$lambda$2 = LightTheme.backgroundBaseLower_delegate$lambda$2(resources, theme);
                return Integer.valueOf(backgroundBaseLower_delegate$lambda$2);
            }
        });
        this.backgroundBaseLowest$delegate = l.a(new Function0() { // from class: g8.c7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundBaseLowest_delegate$lambda$3;
                backgroundBaseLowest_delegate$lambda$3 = LightTheme.backgroundBaseLowest_delegate$lambda$3(resources, theme);
                return Integer.valueOf(backgroundBaseLowest_delegate$lambda$3);
            }
        });
        this.backgroundFeedbackCritical$delegate = l.a(new Function0() { // from class: g8.o7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackCritical_delegate$lambda$4;
                backgroundFeedbackCritical_delegate$lambda$4 = LightTheme.backgroundFeedbackCritical_delegate$lambda$4(resources, theme);
                return Integer.valueOf(backgroundFeedbackCritical_delegate$lambda$4);
            }
        });
        this.backgroundFeedbackNotification$delegate = l.a(new Function0() { // from class: g8.a8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundFeedbackNotification_delegate$lambda$5;
                backgroundFeedbackNotification_delegate$lambda$5 = LightTheme.backgroundFeedbackNotification_delegate$lambda$5(resources, theme);
                return Integer.valueOf(backgroundFeedbackNotification_delegate$lambda$5);
            }
        });
        this.backgroundModMuted$delegate = l.a(new Function0() { // from class: g8.m8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModMuted_delegate$lambda$6;
                backgroundModMuted_delegate$lambda$6 = LightTheme.backgroundModMuted_delegate$lambda$6(resources, theme);
                return Integer.valueOf(backgroundModMuted_delegate$lambda$6);
            }
        });
        this.backgroundModNormal$delegate = l.a(new Function0() { // from class: g8.y8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModNormal_delegate$lambda$7;
                backgroundModNormal_delegate$lambda$7 = LightTheme.backgroundModNormal_delegate$lambda$7(resources, theme);
                return Integer.valueOf(backgroundModNormal_delegate$lambda$7);
            }
        });
        this.backgroundModStrong$delegate = l.a(new Function0() { // from class: g8.k9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModStrong_delegate$lambda$8;
                backgroundModStrong_delegate$lambda$8 = LightTheme.backgroundModStrong_delegate$lambda$8(resources, theme);
                return Integer.valueOf(backgroundModStrong_delegate$lambda$8);
            }
        });
        this.backgroundModSubtle$delegate = l.a(new Function0() { // from class: g8.o9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundModSubtle_delegate$lambda$9;
                backgroundModSubtle_delegate$lambda$9 = LightTheme.backgroundModSubtle_delegate$lambda$9(resources, theme);
                return Integer.valueOf(backgroundModSubtle_delegate$lambda$9);
            }
        });
        this.backgroundScrim$delegate = l.a(new Function0() { // from class: g8.n6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrim_delegate$lambda$10;
                backgroundScrim_delegate$lambda$10 = LightTheme.backgroundScrim_delegate$lambda$10(resources, theme);
                return Integer.valueOf(backgroundScrim_delegate$lambda$10);
            }
        });
        this.backgroundScrimLightbox$delegate = l.a(new Function0() { // from class: g8.y6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundScrimLightbox_delegate$lambda$11;
                backgroundScrimLightbox_delegate$lambda$11 = LightTheme.backgroundScrimLightbox_delegate$lambda$11(resources, theme);
                return Integer.valueOf(backgroundScrimLightbox_delegate$lambda$11);
            }
        });
        this.backgroundSecondaryAlt$delegate = l.a(new Function0() { // from class: g8.j7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSecondaryAlt_delegate$lambda$12;
                backgroundSecondaryAlt_delegate$lambda$12 = LightTheme.backgroundSecondaryAlt_delegate$lambda$12(resources, theme);
                return Integer.valueOf(backgroundSecondaryAlt_delegate$lambda$12);
            }
        });
        this.backgroundSurfaceHigh$delegate = l.a(new Function0() { // from class: g8.u7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHigh_delegate$lambda$13;
                backgroundSurfaceHigh_delegate$lambda$13 = LightTheme.backgroundSurfaceHigh_delegate$lambda$13(resources, theme);
                return Integer.valueOf(backgroundSurfaceHigh_delegate$lambda$13);
            }
        });
        this.backgroundSurfaceHighest$delegate = l.a(new Function0() { // from class: g8.f8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int backgroundSurfaceHighest_delegate$lambda$14;
                backgroundSurfaceHighest_delegate$lambda$14 = LightTheme.backgroundSurfaceHighest_delegate$lambda$14(resources, theme);
                return Integer.valueOf(backgroundSurfaceHighest_delegate$lambda$14);
            }
        });
        this.badgeBackgroundBrand$delegate = l.a(new Function0() { // from class: g8.q8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeBackgroundBrand_delegate$lambda$15;
                badgeBackgroundBrand_delegate$lambda$15 = LightTheme.badgeBackgroundBrand_delegate$lambda$15(resources, theme);
                return Integer.valueOf(badgeBackgroundBrand_delegate$lambda$15);
            }
        });
        this.badgeBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.b9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeBackgroundDefault_delegate$lambda$16;
                badgeBackgroundDefault_delegate$lambda$16 = LightTheme.badgeBackgroundDefault_delegate$lambda$16(resources, theme);
                return Integer.valueOf(badgeBackgroundDefault_delegate$lambda$16);
            }
        });
        this.badgeNotificationBackground$delegate = l.a(new Function0() { // from class: g8.m9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeNotificationBackground_delegate$lambda$17;
                badgeNotificationBackground_delegate$lambda$17 = LightTheme.badgeNotificationBackground_delegate$lambda$17(resources, theme);
                return Integer.valueOf(badgeNotificationBackground_delegate$lambda$17);
            }
        });
        this.badgeTextDefault$delegate = l.a(new Function0() { // from class: g8.p9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int badgeTextDefault_delegate$lambda$18;
                badgeTextDefault_delegate$lambda$18 = LightTheme.badgeTextDefault_delegate$lambda$18(resources, theme);
                return Integer.valueOf(badgeTextDefault_delegate$lambda$18);
            }
        });
        this.bgSurfaceRaised$delegate = l.a(new Function0() { // from class: g8.d6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int bgSurfaceRaised_delegate$lambda$19;
                bgSurfaceRaised_delegate$lambda$19 = LightTheme.bgSurfaceRaised_delegate$lambda$19(resources, theme);
                return Integer.valueOf(bgSurfaceRaised_delegate$lambda$19);
            }
        });
        this.borderStrong$delegate = l.a(new Function0() { // from class: g8.f6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderStrong_delegate$lambda$20;
                borderStrong_delegate$lambda$20 = LightTheme.borderStrong_delegate$lambda$20(resources, theme);
                return Integer.valueOf(borderStrong_delegate$lambda$20);
            }
        });
        this.borderSubtle$delegate = l.a(new Function0() { // from class: g8.g6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int borderSubtle_delegate$lambda$21;
                borderSubtle_delegate$lambda$21 = LightTheme.borderSubtle_delegate$lambda$21(resources, theme);
                return Integer.valueOf(borderSubtle_delegate$lambda$21);
            }
        });
        this.cardBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.h6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int cardBackgroundDefault_delegate$lambda$22;
                cardBackgroundDefault_delegate$lambda$22 = LightTheme.cardBackgroundDefault_delegate$lambda$22(resources, theme);
                return Integer.valueOf(cardBackgroundDefault_delegate$lambda$22);
            }
        });
        this.chatSwipeToReplyBackground$delegate = l.a(new Function0() { // from class: g8.i6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int chatSwipeToReplyBackground_delegate$lambda$23;
                chatSwipeToReplyBackground_delegate$lambda$23 = LightTheme.chatSwipeToReplyBackground_delegate$lambda$23(resources, theme);
                return Integer.valueOf(chatSwipeToReplyBackground_delegate$lambda$23);
            }
        });
        this.chatSwipeToReplyGradientBackground$delegate = l.a(new Function0() { // from class: g8.j6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int chatSwipeToReplyGradientBackground_delegate$lambda$24;
                chatSwipeToReplyGradientBackground_delegate$lambda$24 = LightTheme.chatSwipeToReplyGradientBackground_delegate$lambda$24(resources, theme);
                return Integer.valueOf(chatSwipeToReplyGradientBackground_delegate$lambda$24);
            }
        });
        this.controlConnectedBackgroundActive$delegate = l.a(new Function0() { // from class: g8.k6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundActive_delegate$lambda$25;
                controlConnectedBackgroundActive_delegate$lambda$25 = LightTheme.controlConnectedBackgroundActive_delegate$lambda$25(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundActive_delegate$lambda$25);
            }
        });
        this.controlConnectedBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.l6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBackgroundDefault_delegate$lambda$26;
                controlConnectedBackgroundDefault_delegate$lambda$26 = LightTheme.controlConnectedBackgroundDefault_delegate$lambda$26(resources, theme);
                return Integer.valueOf(controlConnectedBackgroundDefault_delegate$lambda$26);
            }
        });
        this.controlConnectedBorderDefault$delegate = l.a(new Function0() { // from class: g8.m6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedBorderDefault_delegate$lambda$27;
                controlConnectedBorderDefault_delegate$lambda$27 = LightTheme.controlConnectedBorderDefault_delegate$lambda$27(resources, theme);
                return Integer.valueOf(controlConnectedBorderDefault_delegate$lambda$27);
            }
        });
        this.controlConnectedTextDefault$delegate = l.a(new Function0() { // from class: g8.o6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlConnectedTextDefault_delegate$lambda$28;
                controlConnectedTextDefault_delegate$lambda$28 = LightTheme.controlConnectedTextDefault_delegate$lambda$28(resources, theme);
                return Integer.valueOf(controlConnectedTextDefault_delegate$lambda$28);
            }
        });
        this.controlCriticalPrimaryBackgroundActive$delegate = l.a(new Function0() { // from class: g8.p6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundActive_delegate$lambda$29;
                controlCriticalPrimaryBackgroundActive_delegate$lambda$29 = LightTheme.controlCriticalPrimaryBackgroundActive_delegate$lambda$29(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundActive_delegate$lambda$29);
            }
        });
        this.controlCriticalPrimaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.r6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBackgroundDefault_delegate$lambda$30;
                controlCriticalPrimaryBackgroundDefault_delegate$lambda$30 = LightTheme.controlCriticalPrimaryBackgroundDefault_delegate$lambda$30(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBackgroundDefault_delegate$lambda$30);
            }
        });
        this.controlCriticalPrimaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.s6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryBorderDefault_delegate$lambda$31;
                controlCriticalPrimaryBorderDefault_delegate$lambda$31 = LightTheme.controlCriticalPrimaryBorderDefault_delegate$lambda$31(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryBorderDefault_delegate$lambda$31);
            }
        });
        this.controlCriticalPrimaryTextDefault$delegate = l.a(new Function0() { // from class: g8.t6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlCriticalPrimaryTextDefault_delegate$lambda$32;
                controlCriticalPrimaryTextDefault_delegate$lambda$32 = LightTheme.controlCriticalPrimaryTextDefault_delegate$lambda$32(resources, theme);
                return Integer.valueOf(controlCriticalPrimaryTextDefault_delegate$lambda$32);
            }
        });
        this.controlOverlayPrimaryBackgroundActive$delegate = l.a(new Function0() { // from class: g8.u6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundActive_delegate$lambda$33;
                controlOverlayPrimaryBackgroundActive_delegate$lambda$33 = LightTheme.controlOverlayPrimaryBackgroundActive_delegate$lambda$33(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundActive_delegate$lambda$33);
            }
        });
        this.controlOverlayPrimaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.v6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBackgroundDefault_delegate$lambda$34;
                controlOverlayPrimaryBackgroundDefault_delegate$lambda$34 = LightTheme.controlOverlayPrimaryBackgroundDefault_delegate$lambda$34(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBackgroundDefault_delegate$lambda$34);
            }
        });
        this.controlOverlayPrimaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.w6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryBorderDefault_delegate$lambda$35;
                controlOverlayPrimaryBorderDefault_delegate$lambda$35 = LightTheme.controlOverlayPrimaryBorderDefault_delegate$lambda$35(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryBorderDefault_delegate$lambda$35);
            }
        });
        this.controlOverlayPrimaryTextDefault$delegate = l.a(new Function0() { // from class: g8.x6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlayPrimaryTextDefault_delegate$lambda$36;
                controlOverlayPrimaryTextDefault_delegate$lambda$36 = LightTheme.controlOverlayPrimaryTextDefault_delegate$lambda$36(resources, theme);
                return Integer.valueOf(controlOverlayPrimaryTextDefault_delegate$lambda$36);
            }
        });
        this.controlOverlaySecondaryBackgroundActive$delegate = l.a(new Function0() { // from class: g8.z6
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundActive_delegate$lambda$37;
                controlOverlaySecondaryBackgroundActive_delegate$lambda$37 = LightTheme.controlOverlaySecondaryBackgroundActive_delegate$lambda$37(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundActive_delegate$lambda$37);
            }
        });
        this.controlOverlaySecondaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.a7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBackgroundDefault_delegate$lambda$38;
                controlOverlaySecondaryBackgroundDefault_delegate$lambda$38 = LightTheme.controlOverlaySecondaryBackgroundDefault_delegate$lambda$38(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBackgroundDefault_delegate$lambda$38);
            }
        });
        this.controlOverlaySecondaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.b7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryBorderDefault_delegate$lambda$39;
                controlOverlaySecondaryBorderDefault_delegate$lambda$39 = LightTheme.controlOverlaySecondaryBorderDefault_delegate$lambda$39(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryBorderDefault_delegate$lambda$39);
            }
        });
        this.controlOverlaySecondaryTextDefault$delegate = l.a(new Function0() { // from class: g8.d7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlOverlaySecondaryTextDefault_delegate$lambda$40;
                controlOverlaySecondaryTextDefault_delegate$lambda$40 = LightTheme.controlOverlaySecondaryTextDefault_delegate$lambda$40(resources, theme);
                return Integer.valueOf(controlOverlaySecondaryTextDefault_delegate$lambda$40);
            }
        });
        this.controlPrimaryBackgroundActive$delegate = l.a(new Function0() { // from class: g8.e7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundActive_delegate$lambda$41;
                controlPrimaryBackgroundActive_delegate$lambda$41 = LightTheme.controlPrimaryBackgroundActive_delegate$lambda$41(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundActive_delegate$lambda$41);
            }
        });
        this.controlPrimaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.f7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBackgroundDefault_delegate$lambda$42;
                controlPrimaryBackgroundDefault_delegate$lambda$42 = LightTheme.controlPrimaryBackgroundDefault_delegate$lambda$42(resources, theme);
                return Integer.valueOf(controlPrimaryBackgroundDefault_delegate$lambda$42);
            }
        });
        this.controlPrimaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.g7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryBorderDefault_delegate$lambda$43;
                controlPrimaryBorderDefault_delegate$lambda$43 = LightTheme.controlPrimaryBorderDefault_delegate$lambda$43(resources, theme);
                return Integer.valueOf(controlPrimaryBorderDefault_delegate$lambda$43);
            }
        });
        this.controlPrimaryTextDefault$delegate = l.a(new Function0() { // from class: g8.h7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlPrimaryTextDefault_delegate$lambda$44;
                controlPrimaryTextDefault_delegate$lambda$44 = LightTheme.controlPrimaryTextDefault_delegate$lambda$44(resources, theme);
                return Integer.valueOf(controlPrimaryTextDefault_delegate$lambda$44);
            }
        });
        this.controlSecondaryBackgroundActive$delegate = l.a(new Function0() { // from class: g8.i7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundActive_delegate$lambda$45;
                controlSecondaryBackgroundActive_delegate$lambda$45 = LightTheme.controlSecondaryBackgroundActive_delegate$lambda$45(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundActive_delegate$lambda$45);
            }
        });
        this.controlSecondaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.k7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBackgroundDefault_delegate$lambda$46;
                controlSecondaryBackgroundDefault_delegate$lambda$46 = LightTheme.controlSecondaryBackgroundDefault_delegate$lambda$46(resources, theme);
                return Integer.valueOf(controlSecondaryBackgroundDefault_delegate$lambda$46);
            }
        });
        this.controlSecondaryBorderActive$delegate = l.a(new Function0() { // from class: g8.l7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderActive_delegate$lambda$47;
                controlSecondaryBorderActive_delegate$lambda$47 = LightTheme.controlSecondaryBorderActive_delegate$lambda$47(resources, theme);
                return Integer.valueOf(controlSecondaryBorderActive_delegate$lambda$47);
            }
        });
        this.controlSecondaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.m7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryBorderDefault_delegate$lambda$48;
                controlSecondaryBorderDefault_delegate$lambda$48 = LightTheme.controlSecondaryBorderDefault_delegate$lambda$48(resources, theme);
                return Integer.valueOf(controlSecondaryBorderDefault_delegate$lambda$48);
            }
        });
        this.controlSecondaryTextDefault$delegate = l.a(new Function0() { // from class: g8.n7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int controlSecondaryTextDefault_delegate$lambda$49;
                controlSecondaryTextDefault_delegate$lambda$49 = LightTheme.controlSecondaryTextDefault_delegate$lambda$49(resources, theme);
                return Integer.valueOf(controlSecondaryTextDefault_delegate$lambda$49);
            }
        });
        this.embedBackground$delegate = l.a(new Function0() { // from class: g8.p7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int embedBackground_delegate$lambda$50;
                embedBackground_delegate$lambda$50 = LightTheme.embedBackground_delegate$lambda$50(resources, theme);
                return Integer.valueOf(embedBackground_delegate$lambda$50);
            }
        });
        this.iconFeedbackCritical$delegate = l.a(new Function0() { // from class: g8.q7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackCritical_delegate$lambda$51;
                iconFeedbackCritical_delegate$lambda$51 = LightTheme.iconFeedbackCritical_delegate$lambda$51(resources, theme);
                return Integer.valueOf(iconFeedbackCritical_delegate$lambda$51);
            }
        });
        this.iconFeedbackInfo$delegate = l.a(new Function0() { // from class: g8.r7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackInfo_delegate$lambda$52;
                iconFeedbackInfo_delegate$lambda$52 = LightTheme.iconFeedbackInfo_delegate$lambda$52(resources, theme);
                return Integer.valueOf(iconFeedbackInfo_delegate$lambda$52);
            }
        });
        this.iconFeedbackNotification$delegate = l.a(new Function0() { // from class: g8.s7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackNotification_delegate$lambda$53;
                iconFeedbackNotification_delegate$lambda$53 = LightTheme.iconFeedbackNotification_delegate$lambda$53(resources, theme);
                return Integer.valueOf(iconFeedbackNotification_delegate$lambda$53);
            }
        });
        this.iconFeedbackPositive$delegate = l.a(new Function0() { // from class: g8.t7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackPositive_delegate$lambda$54;
                iconFeedbackPositive_delegate$lambda$54 = LightTheme.iconFeedbackPositive_delegate$lambda$54(resources, theme);
                return Integer.valueOf(iconFeedbackPositive_delegate$lambda$54);
            }
        });
        this.iconFeedbackWarning$delegate = l.a(new Function0() { // from class: g8.v7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int iconFeedbackWarning_delegate$lambda$55;
                iconFeedbackWarning_delegate$lambda$55 = LightTheme.iconFeedbackWarning_delegate$lambda$55(resources, theme);
                return Integer.valueOf(iconFeedbackWarning_delegate$lambda$55);
            }
        });
        this.inputBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.w7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBackgroundDefault_delegate$lambda$56;
                inputBackgroundDefault_delegate$lambda$56 = LightTheme.inputBackgroundDefault_delegate$lambda$56(resources, theme);
                return Integer.valueOf(inputBackgroundDefault_delegate$lambda$56);
            }
        });
        this.inputBorderDefault$delegate = l.a(new Function0() { // from class: g8.x7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int inputBorderDefault_delegate$lambda$57;
                inputBorderDefault_delegate$lambda$57 = LightTheme.inputBorderDefault_delegate$lambda$57(resources, theme);
                return Integer.valueOf(inputBorderDefault_delegate$lambda$57);
            }
        });
        this.interactiveBackgroundSelected$delegate = l.a(new Function0() { // from class: g8.y7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveBackgroundSelected_delegate$lambda$58;
                interactiveBackgroundSelected_delegate$lambda$58 = LightTheme.interactiveBackgroundSelected_delegate$lambda$58(resources, theme);
                return Integer.valueOf(interactiveBackgroundSelected_delegate$lambda$58);
            }
        });
        this.interactiveIconActive$delegate = l.a(new Function0() { // from class: g8.z7
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconActive_delegate$lambda$59;
                interactiveIconActive_delegate$lambda$59 = LightTheme.interactiveIconActive_delegate$lambda$59(resources, theme);
                return Integer.valueOf(interactiveIconActive_delegate$lambda$59);
            }
        });
        this.interactiveIconDefault$delegate = l.a(new Function0() { // from class: g8.b8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveIconDefault_delegate$lambda$60;
                interactiveIconDefault_delegate$lambda$60 = LightTheme.interactiveIconDefault_delegate$lambda$60(resources, theme);
                return Integer.valueOf(interactiveIconDefault_delegate$lambda$60);
            }
        });
        this.interactiveMuted$delegate = l.a(new Function0() { // from class: g8.c8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveMuted_delegate$lambda$61;
                interactiveMuted_delegate$lambda$61 = LightTheme.interactiveMuted_delegate$lambda$61(resources, theme);
                return Integer.valueOf(interactiveMuted_delegate$lambda$61);
            }
        });
        this.interactiveTextActive$delegate = l.a(new Function0() { // from class: g8.d8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextActive_delegate$lambda$62;
                interactiveTextActive_delegate$lambda$62 = LightTheme.interactiveTextActive_delegate$lambda$62(resources, theme);
                return Integer.valueOf(interactiveTextActive_delegate$lambda$62);
            }
        });
        this.interactiveTextDefault$delegate = l.a(new Function0() { // from class: g8.e8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int interactiveTextDefault_delegate$lambda$63;
                interactiveTextDefault_delegate$lambda$63 = LightTheme.interactiveTextDefault_delegate$lambda$63(resources, theme);
                return Integer.valueOf(interactiveTextDefault_delegate$lambda$63);
            }
        });
        this.messageHighlightBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.g8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int messageHighlightBackgroundDefault_delegate$lambda$64;
                messageHighlightBackgroundDefault_delegate$lambda$64 = LightTheme.messageHighlightBackgroundDefault_delegate$lambda$64(resources, theme);
                return Integer.valueOf(messageHighlightBackgroundDefault_delegate$lambda$64);
            }
        });
        this.mobileAndroidButtonBackgroundRipple$delegate = l.a(new Function0() { // from class: g8.h8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileAndroidButtonBackgroundRipple_delegate$lambda$65;
                mobileAndroidButtonBackgroundRipple_delegate$lambda$65 = LightTheme.mobileAndroidButtonBackgroundRipple_delegate$lambda$65(resources, theme);
                return Integer.valueOf(mobileAndroidButtonBackgroundRipple_delegate$lambda$65);
            }
        });
        this.mobileLegacyButtonSecondaryBackgroundDefault$delegate = l.a(new Function0() { // from class: g8.i8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$66;
                mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$66 = LightTheme.mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$66(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$66);
            }
        });
        this.mobileLegacyButtonSecondaryBorderDefault$delegate = l.a(new Function0() { // from class: g8.j8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$67;
                mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$67 = LightTheme.mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$67(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$67);
            }
        });
        this.mobileLegacyButtonSecondaryTextDefault$delegate = l.a(new Function0() { // from class: g8.k8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileLegacyButtonSecondaryTextDefault_delegate$lambda$68;
                mobileLegacyButtonSecondaryTextDefault_delegate$lambda$68 = LightTheme.mobileLegacyButtonSecondaryTextDefault_delegate$lambda$68(resources, theme);
                return Integer.valueOf(mobileLegacyButtonSecondaryTextDefault_delegate$lambda$68);
            }
        });
        this.mobileTextHeadingPrimary$delegate = l.a(new Function0() { // from class: g8.l8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int mobileTextHeadingPrimary_delegate$lambda$69;
                mobileTextHeadingPrimary_delegate$lambda$69 = LightTheme.mobileTextHeadingPrimary_delegate$lambda$69(resources, theme);
                return Integer.valueOf(mobileTextHeadingPrimary_delegate$lambda$69);
            }
        });
        this.progressbarIndicatorBackground$delegate = l.a(new Function0() { // from class: g8.n8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int progressbarIndicatorBackground_delegate$lambda$70;
                progressbarIndicatorBackground_delegate$lambda$70 = LightTheme.progressbarIndicatorBackground_delegate$lambda$70(resources, theme);
                return Integer.valueOf(progressbarIndicatorBackground_delegate$lambda$70);
            }
        });
        this.progressbarTrackBackground$delegate = l.a(new Function0() { // from class: g8.o8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int progressbarTrackBackground_delegate$lambda$71;
                progressbarTrackBackground_delegate$lambda$71 = LightTheme.progressbarTrackBackground_delegate$lambda$71(resources, theme);
                return Integer.valueOf(progressbarTrackBackground_delegate$lambda$71);
            }
        });
        this.redesignButtonTertiaryBackground$delegate = l.a(new Function0() { // from class: g8.p8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int redesignButtonTertiaryBackground_delegate$lambda$72;
                redesignButtonTertiaryBackground_delegate$lambda$72 = LightTheme.redesignButtonTertiaryBackground_delegate$lambda$72(resources, theme);
                return Integer.valueOf(redesignButtonTertiaryBackground_delegate$lambda$72);
            }
        });
        this.redesignButtonTertiaryText$delegate = l.a(new Function0() { // from class: g8.r8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int redesignButtonTertiaryText_delegate$lambda$73;
                redesignButtonTertiaryText_delegate$lambda$73 = LightTheme.redesignButtonTertiaryText_delegate$lambda$73(resources, theme);
                return Integer.valueOf(redesignButtonTertiaryText_delegate$lambda$73);
            }
        });
        this.spineDefault$delegate = l.a(new Function0() { // from class: g8.s8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spineDefault_delegate$lambda$74;
                spineDefault_delegate$lambda$74 = LightTheme.spineDefault_delegate$lambda$74(resources, theme);
                return Integer.valueOf(spineDefault_delegate$lambda$74);
            }
        });
        this.spoilerHiddenBackground$delegate = l.a(new Function0() { // from class: g8.t8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spoilerHiddenBackground_delegate$lambda$75;
                spoilerHiddenBackground_delegate$lambda$75 = LightTheme.spoilerHiddenBackground_delegate$lambda$75(resources, theme);
                return Integer.valueOf(spoilerHiddenBackground_delegate$lambda$75);
            }
        });
        this.spoilerRevealedBackground$delegate = l.a(new Function0() { // from class: g8.u8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int spoilerRevealedBackground_delegate$lambda$76;
                spoilerRevealedBackground_delegate$lambda$76 = LightTheme.spoilerRevealedBackground_delegate$lambda$76(resources, theme);
                return Integer.valueOf(spoilerRevealedBackground_delegate$lambda$76);
            }
        });
        this.statusDanger$delegate = l.a(new Function0() { // from class: g8.v8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusDanger_delegate$lambda$77;
                statusDanger_delegate$lambda$77 = LightTheme.statusDanger_delegate$lambda$77(resources, theme);
                return Integer.valueOf(statusDanger_delegate$lambda$77);
            }
        });
        this.statusPositive$delegate = l.a(new Function0() { // from class: g8.w8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusPositive_delegate$lambda$78;
                statusPositive_delegate$lambda$78 = LightTheme.statusPositive_delegate$lambda$78(resources, theme);
                return Integer.valueOf(statusPositive_delegate$lambda$78);
            }
        });
        this.statusPositiveText$delegate = l.a(new Function0() { // from class: g8.x8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusPositiveText_delegate$lambda$79;
                statusPositiveText_delegate$lambda$79 = LightTheme.statusPositiveText_delegate$lambda$79(resources, theme);
                return Integer.valueOf(statusPositiveText_delegate$lambda$79);
            }
        });
        this.statusWarning$delegate = l.a(new Function0() { // from class: g8.z8
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int statusWarning_delegate$lambda$80;
                statusWarning_delegate$lambda$80 = LightTheme.statusWarning_delegate$lambda$80(resources, theme);
                return Integer.valueOf(statusWarning_delegate$lambda$80);
            }
        });
        this.textBrand$delegate = l.a(new Function0() { // from class: g8.a9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textBrand_delegate$lambda$81;
                textBrand_delegate$lambda$81 = LightTheme.textBrand_delegate$lambda$81(resources, theme);
                return Integer.valueOf(textBrand_delegate$lambda$81);
            }
        });
        this.textDefault$delegate = l.a(new Function0() { // from class: g8.c9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textDefault_delegate$lambda$82;
                textDefault_delegate$lambda$82 = LightTheme.textDefault_delegate$lambda$82(resources, theme);
                return Integer.valueOf(textDefault_delegate$lambda$82);
            }
        });
        this.textFeedbackCritical$delegate = l.a(new Function0() { // from class: g8.d9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackCritical_delegate$lambda$83;
                textFeedbackCritical_delegate$lambda$83 = LightTheme.textFeedbackCritical_delegate$lambda$83(resources, theme);
                return Integer.valueOf(textFeedbackCritical_delegate$lambda$83);
            }
        });
        this.textFeedbackInfo$delegate = l.a(new Function0() { // from class: g8.e9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackInfo_delegate$lambda$84;
                textFeedbackInfo_delegate$lambda$84 = LightTheme.textFeedbackInfo_delegate$lambda$84(resources, theme);
                return Integer.valueOf(textFeedbackInfo_delegate$lambda$84);
            }
        });
        this.textFeedbackPositive$delegate = l.a(new Function0() { // from class: g8.f9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackPositive_delegate$lambda$85;
                textFeedbackPositive_delegate$lambda$85 = LightTheme.textFeedbackPositive_delegate$lambda$85(resources, theme);
                return Integer.valueOf(textFeedbackPositive_delegate$lambda$85);
            }
        });
        this.textFeedbackWarning$delegate = l.a(new Function0() { // from class: g8.g9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textFeedbackWarning_delegate$lambda$86;
                textFeedbackWarning_delegate$lambda$86 = LightTheme.textFeedbackWarning_delegate$lambda$86(resources, theme);
                return Integer.valueOf(textFeedbackWarning_delegate$lambda$86);
            }
        });
        this.textLink$delegate = l.a(new Function0() { // from class: g8.h9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textLink_delegate$lambda$87;
                textLink_delegate$lambda$87 = LightTheme.textLink_delegate$lambda$87(resources, theme);
                return Integer.valueOf(textLink_delegate$lambda$87);
            }
        });
        this.textMuted$delegate = l.a(new Function0() { // from class: g8.i9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textMuted_delegate$lambda$88;
                textMuted_delegate$lambda$88 = LightTheme.textMuted_delegate$lambda$88(resources, theme);
                return Integer.valueOf(textMuted_delegate$lambda$88);
            }
        });
        this.textStrong$delegate = l.a(new Function0() { // from class: g8.j9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textStrong_delegate$lambda$89;
                textStrong_delegate$lambda$89 = LightTheme.textStrong_delegate$lambda$89(resources, theme);
                return Integer.valueOf(textStrong_delegate$lambda$89);
            }
        });
        this.textSubtle$delegate = l.a(new Function0() { // from class: g8.l9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int textSubtle_delegate$lambda$90;
                textSubtle_delegate$lambda$90 = LightTheme.textSubtle_delegate$lambda$90(resources, theme);
                return Integer.valueOf(textSubtle_delegate$lambda$90);
            }
        });
        this.white$delegate = l.a(new Function0() { // from class: g8.n9
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int white_delegate$lambda$91;
                white_delegate$lambda$91 = LightTheme.white_delegate$lambda$91(resources, theme);
                return Integer.valueOf(white_delegate$lambda$91);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundAccent_delegate$lambda$0(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLow_delegate$lambda$1(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLower_delegate$lambda$2(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_130, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundBaseLowest_delegate$lambda$3(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_160, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackCritical_delegate$lambda$4(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundFeedbackNotification_delegate$lambda$5(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModMuted_delegate$lambda$6(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_muted_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModNormal_delegate$lambda$7(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_normal_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModStrong_delegate$lambda$8(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_strong_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundModSubtle_delegate$lambda$9(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_mod_subtle_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrimLightbox_delegate$lambda$11(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_lightbox_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundScrim_delegate$lambda$10(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.background_scrim_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSecondaryAlt_delegate$lambda$12(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_160, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHigh_delegate$lambda$13(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int backgroundSurfaceHighest_delegate$lambda$14(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeBackgroundBrand_delegate$lambda$15(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeBackgroundDefault_delegate$lambda$16(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.badge_background_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeNotificationBackground_delegate$lambda$17(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int badgeTextDefault_delegate$lambda$18(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int bgSurfaceRaised_delegate$lambda$19(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderStrong_delegate$lambda$20(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_strong_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int borderSubtle_delegate$lambda$21(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.border_subtle_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int cardBackgroundDefault_delegate$lambda$22(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int chatSwipeToReplyBackground_delegate$lambda$23(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_160, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int chatSwipeToReplyGradientBackground_delegate$lambda$24(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.chat_swipe_to_reply_gradient_background_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundActive_delegate$lambda$25(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBackgroundDefault_delegate$lambda$26(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedBorderDefault_delegate$lambda$27(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlConnectedTextDefault_delegate$lambda$28(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundActive_delegate$lambda$29(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBackgroundDefault_delegate$lambda$30(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryBorderDefault_delegate$lambda$31(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlCriticalPrimaryTextDefault_delegate$lambda$32(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundActive_delegate$lambda$33(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_230, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBackgroundDefault_delegate$lambda$34(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryBorderDefault_delegate$lambda$35(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlayPrimaryTextDefault_delegate$lambda$36(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_860, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundActive_delegate$lambda$37(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_active_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBackgroundDefault_delegate$lambda$38(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_background_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryBorderDefault_delegate$lambda$39(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_overlay_secondary_border_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlOverlaySecondaryTextDefault_delegate$lambda$40(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundActive_delegate$lambda$41(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_560, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBackgroundDefault_delegate$lambda$42(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryBorderDefault_delegate$lambda$43(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlPrimaryTextDefault_delegate$lambda$44(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundActive_delegate$lambda$45(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_130, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBackgroundDefault_delegate$lambda$46(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderActive_delegate$lambda$47(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_active_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryBorderDefault_delegate$lambda$48(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.control_secondary_border_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int controlSecondaryTextDefault_delegate$lambda$49(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int embedBackground_delegate$lambda$50(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_130, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackCritical_delegate$lambda$51(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackInfo_delegate$lambda$52(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackNotification_delegate$lambda$53(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackPositive_delegate$lambda$54(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int iconFeedbackWarning_delegate$lambda$55(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBackgroundDefault_delegate$lambda$56(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.input_background_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int inputBorderDefault_delegate$lambda$57(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.input_border_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveBackgroundSelected_delegate$lambda$58(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.interactive_background_selected_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconActive_delegate$lambda$59(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_860, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveIconDefault_delegate$lambda$60(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveMuted_delegate$lambda$61(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_300, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextActive_delegate$lambda$62(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_860, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int interactiveTextDefault_delegate$lambda$63(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int messageHighlightBackgroundDefault_delegate$lambda$64(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.message_highlight_background_default_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileAndroidButtonBackgroundRipple_delegate$lambda$65(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.mobile_android_button_background_ripple_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryBackgroundDefault_delegate$lambda$66(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryBorderDefault_delegate$lambda$67(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileLegacyButtonSecondaryTextDefault_delegate$lambda$68(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int mobileTextHeadingPrimary_delegate$lambda$69(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_860, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int progressbarIndicatorBackground_delegate$lambda$70(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int progressbarTrackBackground_delegate$lambda$71(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.progressbar_track_background_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int redesignButtonTertiaryBackground_delegate$lambda$72(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.redesign_button_tertiary_background_light, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int redesignButtonTertiaryText_delegate$lambda$73(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spineDefault_delegate$lambda$74(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spoilerHiddenBackground_delegate$lambda$75(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_200, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int spoilerRevealedBackground_delegate$lambda$76(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_160, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusDanger_delegate$lambda$77(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusPositiveText_delegate$lambda$79(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusPositive_delegate$lambda$78(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int statusWarning_delegate$lambda$80(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_400, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textBrand_delegate$lambda$81(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.brand_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textDefault_delegate$lambda$82(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackCritical_delegate$lambda$83(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.red_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackInfo_delegate$lambda$84(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackPositive_delegate$lambda$85(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.green_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textFeedbackWarning_delegate$lambda$86(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.yellow_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textLink_delegate$lambda$87(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.blue_430, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textMuted_delegate$lambda$88(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_460, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textStrong_delegate$lambda$89(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_600, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int textSubtle_delegate$lambda$90(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.primary_500, theme);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int white_delegate$lambda$91(Resources resources, Resources.Theme theme) {
        return ColorUtilsKt.getColorCompat(resources, R.color.white, theme);
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundAccent() {
        return ((Number) this.backgroundAccent$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLow() {
        return ((Number) this.backgroundBaseLow$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLower() {
        return ((Number) this.backgroundBaseLower$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundBaseLowest() {
        return ((Number) this.backgroundBaseLowest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackCritical() {
        return ((Number) this.backgroundFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundFeedbackNotification() {
        return ((Number) this.backgroundFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModMuted() {
        return ((Number) this.backgroundModMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModNormal() {
        return ((Number) this.backgroundModNormal$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModStrong() {
        return ((Number) this.backgroundModStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundModSubtle() {
        return ((Number) this.backgroundModSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundScrim() {
        return ((Number) this.backgroundScrim$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundScrimLightbox() {
        return ((Number) this.backgroundScrimLightbox$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSecondaryAlt() {
        return ((Number) this.backgroundSecondaryAlt$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHigh() {
        return ((Number) this.backgroundSurfaceHigh$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBackgroundSurfaceHighest() {
        return ((Number) this.backgroundSurfaceHighest$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeBackgroundBrand() {
        return ((Number) this.badgeBackgroundBrand$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeBackgroundDefault() {
        return ((Number) this.badgeBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeNotificationBackground() {
        return ((Number) this.badgeNotificationBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBadgeTextDefault() {
        return ((Number) this.badgeTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBgSurfaceRaised() {
        return ((Number) this.bgSurfaceRaised$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBorderStrong() {
        return ((Number) this.borderStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getBorderSubtle() {
        return ((Number) this.borderSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getCardBackgroundDefault() {
        return ((Number) this.cardBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getChatSwipeToReplyBackground() {
        return ((Number) this.chatSwipeToReplyBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getChatSwipeToReplyGradientBackground() {
        return ((Number) this.chatSwipeToReplyGradientBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getColor(int i10, int i11) {
        return i10;
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getColorRes(int i10, int i11) {
        return i10;
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundActive() {
        return ((Number) this.controlConnectedBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBackgroundDefault() {
        return ((Number) this.controlConnectedBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedBorderDefault() {
        return ((Number) this.controlConnectedBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlConnectedTextDefault() {
        return ((Number) this.controlConnectedTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundActive() {
        return ((Number) this.controlCriticalPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBackgroundDefault() {
        return ((Number) this.controlCriticalPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryBorderDefault() {
        return ((Number) this.controlCriticalPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlCriticalPrimaryTextDefault() {
        return ((Number) this.controlCriticalPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundActive() {
        return ((Number) this.controlOverlayPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBackgroundDefault() {
        return ((Number) this.controlOverlayPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryBorderDefault() {
        return ((Number) this.controlOverlayPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlayPrimaryTextDefault() {
        return ((Number) this.controlOverlayPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundActive() {
        return ((Number) this.controlOverlaySecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBackgroundDefault() {
        return ((Number) this.controlOverlaySecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryBorderDefault() {
        return ((Number) this.controlOverlaySecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlOverlaySecondaryTextDefault() {
        return ((Number) this.controlOverlaySecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundActive() {
        return ((Number) this.controlPrimaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBackgroundDefault() {
        return ((Number) this.controlPrimaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryBorderDefault() {
        return ((Number) this.controlPrimaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlPrimaryTextDefault() {
        return ((Number) this.controlPrimaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundActive() {
        return ((Number) this.controlSecondaryBackgroundActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBackgroundDefault() {
        return ((Number) this.controlSecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderActive() {
        return ((Number) this.controlSecondaryBorderActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryBorderDefault() {
        return ((Number) this.controlSecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getControlSecondaryTextDefault() {
        return ((Number) this.controlSecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getEmbedBackground() {
        return ((Number) this.embedBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackCritical() {
        return ((Number) this.iconFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackInfo() {
        return ((Number) this.iconFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackNotification() {
        return ((Number) this.iconFeedbackNotification$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackPositive() {
        return ((Number) this.iconFeedbackPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getIconFeedbackWarning() {
        return ((Number) this.iconFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInputBackgroundDefault() {
        return ((Number) this.inputBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInputBorderDefault() {
        return ((Number) this.inputBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveBackgroundSelected() {
        return ((Number) this.interactiveBackgroundSelected$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveIconActive() {
        return ((Number) this.interactiveIconActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveIconDefault() {
        return ((Number) this.interactiveIconDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveMuted() {
        return ((Number) this.interactiveMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveTextActive() {
        return ((Number) this.interactiveTextActive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getInteractiveTextDefault() {
        return ((Number) this.interactiveTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMessageHighlightBackgroundDefault() {
        return ((Number) this.messageHighlightBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileAndroidButtonBackgroundRipple() {
        return ((Number) this.mobileAndroidButtonBackgroundRipple$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryBackgroundDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryBackgroundDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryBorderDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryBorderDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileLegacyButtonSecondaryTextDefault() {
        return ((Number) this.mobileLegacyButtonSecondaryTextDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getMobileTextHeadingPrimary() {
        return ((Number) this.mobileTextHeadingPrimary$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getProgressbarIndicatorBackground() {
        return ((Number) this.progressbarIndicatorBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getProgressbarTrackBackground() {
        return ((Number) this.progressbarTrackBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getRedesignButtonTertiaryBackground() {
        return ((Number) this.redesignButtonTertiaryBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getRedesignButtonTertiaryText() {
        return ((Number) this.redesignButtonTertiaryText$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpineDefault() {
        return ((Number) this.spineDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpoilerHiddenBackground() {
        return ((Number) this.spoilerHiddenBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getSpoilerRevealedBackground() {
        return ((Number) this.spoilerRevealedBackground$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusDanger() {
        return ((Number) this.statusDanger$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusPositive() {
        return ((Number) this.statusPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusPositiveText() {
        return ((Number) this.statusPositiveText$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getStatusWarning() {
        return ((Number) this.statusWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextBrand() {
        return ((Number) this.textBrand$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextDefault() {
        return ((Number) this.textDefault$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackCritical() {
        return ((Number) this.textFeedbackCritical$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackInfo() {
        return ((Number) this.textFeedbackInfo$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackPositive() {
        return ((Number) this.textFeedbackPositive$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextFeedbackWarning() {
        return ((Number) this.textFeedbackWarning$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextLink() {
        return ((Number) this.textLink$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextMuted() {
        return ((Number) this.textMuted$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextStrong() {
        return ((Number) this.textStrong$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getTextSubtle() {
        return ((Number) this.textSubtle$delegate.getValue()).intValue();
    }

    @Override // com.discord.theme.DiscordThemeObject
    public int getWhite() {
        return ((Number) this.white$delegate.getValue()).intValue();
    }
}
